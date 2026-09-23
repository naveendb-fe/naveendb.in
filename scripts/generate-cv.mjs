#!/usr/bin/env node
/** Thin wrapper — prefer Python generator (embedded fonts). */
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const result = spawnSync('python3', [join(root, 'scripts/generate-cv.py')], {
  stdio: 'inherit',
})
process.exit(result.status ?? 1)
