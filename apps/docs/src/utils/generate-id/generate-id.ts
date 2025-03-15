// https://zelark.github.io/nano-id-cc/

import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet(
  '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
)
export const ID_LENGTH = 10

const prefixes = {
  key: 'key',
  api: 'api',
  policy: 'pol',
  request: 'req',
  workspace: 'ws',
  keyAuth: 'key_auth', // <-- this is internal and does not need to be short or pretty
  test: 'test', // <-- for tests only
} as const

export function generateId(
  prefix: keyof typeof prefixes | undefined,
  length?: number,
): string {
  const id = nanoid(length ?? ID_LENGTH)

  if (!prefix) {
    return id
  }

  return [prefixes[prefix], id].join('_')
}
