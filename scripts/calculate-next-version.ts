#!/usr/bin/env bun

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

interface VersionInfo {
  currentVersion: string;
  nextVersion: string;
  bumpType: 'major' | 'minor' | 'patch';
  hasChangesets: boolean;
}

/**
 * Parses a semver version string into its components
 */
function parseVersion(version: string): [number, number, number] {
  const parts = version.split('.').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    throw new Error(`Invalid version format: ${version}`);
  }
  return parts as [number, number, number];
}

/**
 * Calculates the next version based on the bump type
 */
function calculateNextVersion(
  currentVersion: string,
  bumpType: 'major' | 'minor' | 'patch'
): string {
  const [major, minor, patch] = parseVersion(currentVersion);

  switch (bumpType) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
  }
}

/**
 * Determines the highest bump type from all changeset files
 */
function determineBumpType(changesetDir: string): 'major' | 'minor' | 'patch' {
  const files = readdirSync(changesetDir);
  let bumpType: 'major' | 'minor' | 'patch' = 'patch';

  for (const file of files) {
    if (file === 'README.md' || !file.endsWith('.md')) {
      continue;
    }

    const content = readFileSync(join(changesetDir, file), 'utf-8');

    if (content.includes('major')) {
      return 'major'; // Major is highest priority, return immediately
    } else if (content.includes('minor')) {
      bumpType = 'minor'; // Minor overrides patch
    }
  }

  return bumpType;
}

/**
 * Checks if there are any changeset files (excluding README.md)
 */
function hasChangesets(changesetDir: string): boolean {
  try {
    const files = readdirSync(changesetDir);
    return files.some(file => file !== 'README.md' && file.endsWith('.md'));
  } catch {
    return false;
  }
}

/**
 * Gets the current version from package.json
 */
function getCurrentVersion(packagePath: string): string {
  const pkg = JSON.parse(readFileSync(packagePath, 'utf-8'));
  return pkg.version;
}

/**
 * Main function to calculate version information
 */
function calculateVersionInfo(
  packagePath: string,
  changesetDir: string
): VersionInfo {
  const currentVersion = getCurrentVersion(packagePath);
  const hasChanges = hasChangesets(changesetDir);

  if (!hasChanges) {
    return {
      currentVersion,
      nextVersion: currentVersion,
      bumpType: 'patch',
      hasChangesets: false,
    };
  }

  const bumpType = determineBumpType(changesetDir);
  const nextVersion = calculateNextVersion(currentVersion, bumpType);

  return {
    currentVersion,
    nextVersion,
    bumpType,
    hasChangesets: true,
  };
}

// CLI execution
if (import.meta.main) {
  const args = process.argv.slice(2);
  const format = args[0] || 'json'; // 'json' or 'github'

  const projectRoot = join(import.meta.dir, '..');
  const packagePath = join(projectRoot, 'packages/ui/package.json');
  const changesetDir = join(projectRoot, '.changeset');

  try {
    const versionInfo = calculateVersionInfo(packagePath, changesetDir);

    if (format === 'github') {
      // Output in GitHub Actions format
      console.log(`current_version=${versionInfo.currentVersion}`);
      console.log(`next_version=${versionInfo.nextVersion}`);
      console.log(`bump_type=${versionInfo.bumpType}`);
      console.log(`has_changesets=${versionInfo.hasChangesets}`);
    } else {
      // Output as JSON
      console.log(JSON.stringify(versionInfo, null, 2));
    }

    process.exit(0);
  } catch (error) {
    console.error('Error calculating version:', error);
    process.exit(1);
  }
}

export { calculateVersionInfo, calculateNextVersion, determineBumpType, hasChangesets };
