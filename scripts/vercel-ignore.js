const ALLOWED_PATTERNS = [
  /^master$/,
  /^develop$/,
  /^changeset-release$/,
  /^feat\//,
]

const branch = process.env.VERCEL_GIT_COMMIT_REF

if (!ALLOWED_PATTERNS.some(pattern => pattern.test(branch))) {
  console.log(`Skipping build for branch: ${branch}`)
  process.exit(0)
}

console.log(`Building branch: ${branch}`)
