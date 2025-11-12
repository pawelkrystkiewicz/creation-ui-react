import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'fs'
import { join } from 'path'
import {
  calculateNextVersion,
  parseVersion,
  parseChangesetFrontMatter,
  determineBumpType,
  hasChangesets,
  getCurrentVersion,
  calculateVersionInfo,
} from '../calculate-next-version'

describe('parseVersion', () => {
  it('should parse valid semver versions', () => {
    expect(parseVersion('1.2.3')).toEqual([1, 2, 3])
    expect(parseVersion('0.0.0')).toEqual([0, 0, 0])
    expect(parseVersion('10.20.30')).toEqual([10, 20, 30])
    expect(parseVersion('999.888.777')).toEqual([999, 888, 777])
  })

  it('should throw error for invalid version formats', () => {
    expect(() => parseVersion('1.2')).toThrow('Invalid version format: 1.2')
    expect(() => parseVersion('1.2.3.4')).toThrow('Invalid version format: 1.2.3.4')
    expect(() => parseVersion('a.b.c')).toThrow('Invalid version format: a.b.c')
    expect(() => parseVersion('1.2.x')).toThrow('Invalid version format: 1.2.x')
    expect(() => parseVersion('')).toThrow('Invalid version format: ')
  })
})

describe('calculateNextVersion', () => {
  it('should bump patch version correctly', () => {
    expect(calculateNextVersion('1.2.3', 'patch')).toBe('1.2.4')
    expect(calculateNextVersion('0.0.1', 'patch')).toBe('0.0.2')
    expect(calculateNextVersion('15.2.9', 'patch')).toBe('15.2.10')
  })

  it('should bump minor version correctly', () => {
    expect(calculateNextVersion('1.2.3', 'minor')).toBe('1.3.0')
    expect(calculateNextVersion('0.0.1', 'minor')).toBe('0.1.0')
    expect(calculateNextVersion('15.2.9', 'minor')).toBe('15.3.0')
  })

  it('should bump major version correctly', () => {
    expect(calculateNextVersion('1.2.3', 'major')).toBe('2.0.0')
    expect(calculateNextVersion('0.0.1', 'major')).toBe('1.0.0')
    expect(calculateNextVersion('15.2.9', 'major')).toBe('16.0.0')
  })

  it('should handle version with double digit patch numbers', () => {
    expect(calculateNextVersion('1.2.10', 'patch')).toBe('1.2.11')
    expect(calculateNextVersion('1.10.9', 'minor')).toBe('1.11.0')
    expect(calculateNextVersion('10.2.3', 'major')).toBe('11.0.0')
  })
})

describe('parseChangesetFrontMatter', () => {
  it('should parse valid changeset front matter with major bump', () => {
    const content = `---
"@creation-ui/react": major
---

Breaking changes description`
    expect(parseChangesetFrontMatter(content)).toBe('major')
  })

  it('should parse valid changeset front matter with minor bump', () => {
    const content = `---
"@creation-ui/react": minor
---

New feature description`
    expect(parseChangesetFrontMatter(content)).toBe('minor')
  })

  it('should parse valid changeset front matter with patch bump', () => {
    const content = `---
"@creation-ui/react": patch
---

Bug fix description`
    expect(parseChangesetFrontMatter(content)).toBe('patch')
  })

  it('should handle case insensitive bump types', () => {
    const content = `---
"@creation-ui/react": MAJOR
---

Description`
    expect(parseChangesetFrontMatter(content)).toBe('major')
  })

  it('should return null for missing front matter delimiters', () => {
    const content = '"@creation-ui/react": major'
    expect(parseChangesetFrontMatter(content)).toBe(null)
  })

  it('should return null for missing closing delimiter', () => {
    const content = `---
"@creation-ui/react": major

Description without closing delimiter`
    expect(parseChangesetFrontMatter(content)).toBe(null)
  })

  it('should return null for front matter not at start', () => {
    const content = `
Some text before
---
"@creation-ui/react": major
---`
    expect(parseChangesetFrontMatter(content)).toBe(null)
  })

  it('should return null for invalid bump type', () => {
    const content = `---
"@creation-ui/react": invalid
---

Description`
    expect(parseChangesetFrontMatter(content)).toBe(null)
  })

  it('should return null for invalid YAML', () => {
    const content = `---
this is not valid: yaml: syntax:
---

Description`
    expect(parseChangesetFrontMatter(content)).toBe(null)
  })
})

describe('determineBumpType', () => {
  const testDir = join(process.cwd(), 'test-changesets')

  beforeEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true })
    }
    mkdirSync(testDir, { recursive: true })
  })

  afterEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true })
    }
  })

  it('should return major when any changeset has major bump', () => {
    writeFileSync(
      join(testDir, 'change1.md'),
      `---
"@creation-ui/react": patch
---
Patch change`
    )
    writeFileSync(
      join(testDir, 'change2.md'),
      `---
"@creation-ui/react": major
---
Major change`
    )
    writeFileSync(
      join(testDir, 'change3.md'),
      `---
"@creation-ui/react": minor
---
Minor change`
    )

    expect(determineBumpType(testDir)).toBe('major')
  })

  it('should return minor when no major and at least one minor bump', () => {
    writeFileSync(
      join(testDir, 'change1.md'),
      `---
"@creation-ui/react": patch
---
Patch change`
    )
    writeFileSync(
      join(testDir, 'change2.md'),
      `---
"@creation-ui/react": minor
---
Minor change`
    )

    expect(determineBumpType(testDir)).toBe('minor')
  })

  it('should return patch when all changesets are patch', () => {
    writeFileSync(
      join(testDir, 'change1.md'),
      `---
"@creation-ui/react": patch
---
Patch change 1`
    )
    writeFileSync(
      join(testDir, 'change2.md'),
      `---
"@creation-ui/react": patch
---
Patch change 2`
    )

    expect(determineBumpType(testDir)).toBe('patch')
  })

  it('should return patch when no valid changesets exist', () => {
    writeFileSync(join(testDir, 'README.md'), 'This is a readme')
    writeFileSync(join(testDir, 'invalid.txt'), 'Not a markdown file')

    expect(determineBumpType(testDir)).toBe('patch')
  })

  it('should ignore README.md files', () => {
    writeFileSync(join(testDir, 'README.md'), 'This should be ignored')
    writeFileSync(
      join(testDir, 'change1.md'),
      `---
"@creation-ui/react": minor
---
Minor change`
    )

    expect(determineBumpType(testDir)).toBe('minor')
  })

  it('should ignore non-markdown files', () => {
    writeFileSync(join(testDir, 'config.json'), '{"test": true}')
    writeFileSync(
      join(testDir, 'change1.md'),
      `---
"@creation-ui/react": major
---
Major change`
    )

    expect(determineBumpType(testDir)).toBe('major')
  })

  it('should handle invalid front matter gracefully', () => {
    writeFileSync(join(testDir, 'invalid.md'), 'No front matter here')
    writeFileSync(
      join(testDir, 'valid.md'),
      `---
"@creation-ui/react": minor
---
Valid change`
    )

    expect(determineBumpType(testDir)).toBe('minor')
  })
})

describe('hasChangesets', () => {
  const testDir = join(process.cwd(), 'test-changesets-check')

  beforeEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true })
    }
    mkdirSync(testDir, { recursive: true })
  })

  afterEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true })
    }
  })

  it('should return true when changeset files exist', () => {
    writeFileSync(join(testDir, 'change1.md'), 'Some changeset')
    expect(hasChangesets(testDir)).toBe(true)
  })

  it('should return false when only README.md exists', () => {
    writeFileSync(join(testDir, 'README.md'), 'Readme content')
    expect(hasChangesets(testDir)).toBe(false)
  })

  it('should return false when no markdown files exist', () => {
    writeFileSync(join(testDir, 'config.json'), '{}')
    expect(hasChangesets(testDir)).toBe(false)
  })

  it('should return false when directory does not exist', () => {
    expect(hasChangesets(join(testDir, 'non-existent'))).toBe(false)
  })

  it('should return false when directory is empty', () => {
    expect(hasChangesets(testDir)).toBe(false)
  })

  it('should ignore non-markdown files', () => {
    writeFileSync(join(testDir, 'file.txt'), 'Text file')
    writeFileSync(join(testDir, 'file.json'), '{}')
    expect(hasChangesets(testDir)).toBe(false)
  })
})

describe('getCurrentVersion', () => {
  const testPackageDir = join(process.cwd(), 'test-package')
  const packageJsonPath = join(testPackageDir, 'package.json')

  beforeEach(() => {
    if (existsSync(testPackageDir)) {
      rmSync(testPackageDir, { recursive: true, force: true })
    }
    mkdirSync(testPackageDir, { recursive: true })
  })

  afterEach(() => {
    if (existsSync(testPackageDir)) {
      rmSync(testPackageDir, { recursive: true, force: true })
    }
  })

  it('should read version from package.json', () => {
    writeFileSync(
      packageJsonPath,
      JSON.stringify({
        name: 'test-package',
        version: '1.2.3',
      })
    )

    expect(getCurrentVersion(packageJsonPath)).toBe('1.2.3')
  })

  it('should handle different version formats', () => {
    writeFileSync(
      packageJsonPath,
      JSON.stringify({
        name: 'test-package',
        version: '0.0.1',
      })
    )

    expect(getCurrentVersion(packageJsonPath)).toBe('0.0.1')
  })

  it('should work with complex package.json', () => {
    writeFileSync(
      packageJsonPath,
      JSON.stringify({
        name: 'test-package',
        version: '10.20.30',
        description: 'Test package',
        dependencies: {
          react: '^18.0.0',
        },
      })
    )

    expect(getCurrentVersion(packageJsonPath)).toBe('10.20.30')
  })
})

describe('calculateVersionInfo', () => {
  const testDir = join(process.cwd(), 'test-version-info')
  const packageJsonPath = join(testDir, 'package.json')
  const changesetDir = join(testDir, '.changeset')

  beforeEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true })
    }
    mkdirSync(testDir, { recursive: true })
    mkdirSync(changesetDir, { recursive: true })

    writeFileSync(
      packageJsonPath,
      JSON.stringify({
        name: 'test-package',
        version: '1.2.3',
      })
    )
  })

  afterEach(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true })
    }
  })

  it('should return current version when no changesets exist', () => {
    const result = calculateVersionInfo(packageJsonPath, changesetDir)

    expect(result).toEqual({
      currentVersion: '1.2.3',
      nextVersion: '1.2.3',
      bumpType: 'patch',
      hasChangesets: false,
    })
  })

  it('should calculate next version for patch bump', () => {
    writeFileSync(
      join(changesetDir, 'change.md'),
      `---
"test-package": patch
---
Bug fix`
    )

    const result = calculateVersionInfo(packageJsonPath, changesetDir)

    expect(result).toEqual({
      currentVersion: '1.2.3',
      nextVersion: '1.2.4',
      bumpType: 'patch',
      hasChangesets: true,
    })
  })

  it('should calculate next version for minor bump', () => {
    writeFileSync(
      join(changesetDir, 'change.md'),
      `---
"test-package": minor
---
New feature`
    )

    const result = calculateVersionInfo(packageJsonPath, changesetDir)

    expect(result).toEqual({
      currentVersion: '1.2.3',
      nextVersion: '1.3.0',
      bumpType: 'minor',
      hasChangesets: true,
    })
  })

  it('should calculate next version for major bump', () => {
    writeFileSync(
      join(changesetDir, 'change.md'),
      `---
"test-package": major
---
Breaking change`
    )

    const result = calculateVersionInfo(packageJsonPath, changesetDir)

    expect(result).toEqual({
      currentVersion: '1.2.3',
      nextVersion: '2.0.0',
      bumpType: 'major',
      hasChangesets: true,
    })
  })

  it('should use highest bump type from multiple changesets', () => {
    writeFileSync(
      join(changesetDir, 'patch.md'),
      `---
"test-package": patch
---
Bug fix`
    )
    writeFileSync(
      join(changesetDir, 'minor.md'),
      `---
"test-package": minor
---
New feature`
    )
    writeFileSync(
      join(changesetDir, 'major.md'),
      `---
"test-package": major
---
Breaking change`
    )

    const result = calculateVersionInfo(packageJsonPath, changesetDir)

    expect(result).toEqual({
      currentVersion: '1.2.3',
      nextVersion: '2.0.0',
      bumpType: 'major',
      hasChangesets: true,
    })
  })

  it('should ignore README.md in changeset directory', () => {
    writeFileSync(join(changesetDir, 'README.md'), 'Changeset readme')

    const result = calculateVersionInfo(packageJsonPath, changesetDir)

    expect(result).toEqual({
      currentVersion: '1.2.3',
      nextVersion: '1.2.3',
      bumpType: 'patch',
      hasChangesets: false,
    })
  })
})
