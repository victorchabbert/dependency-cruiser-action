import * as core from '@actions/core'

export function getInputAsArray(name: string, options?: core.InputOptions): string[] {
  return core
    .getInput(name, options)
    .split('\n')
    .map(s => s.trim())
    .filter(x => x !== '')
}

export function getInputAsBoolean(name: string, options?: core.InputOptions): boolean {
  const boolString = core.getInput(name, options)
  if (boolString === '') {
    return false
  } else if (boolString === 'true' || boolString === 'false') {
    return boolString === 'true'
  }
  throw new Error(`Input '${name}' is not a boolean. Got '${boolString}'. Expected: 'true' or 'false'`)
}
