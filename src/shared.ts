import type {ISummary, SeverityType} from 'dependency-cruiser'

export const title = '## Dependency Check'

export function failOnStringToSeverityType(severity: string): Exclude<SeverityType, 'ignore'> | undefined {
  switch (severity) {
    case 'error':
      return 'error'
    case 'warn':
      return 'warn'
    case 'info':
      return 'info'
    case 'none':
      return undefined
    default:
      throw new Error(`Invalid fail-on string.
Expected: error, warn, info, none
Received: ${severity}`)
  }
}

export function shouldFail(severity: Exclude<SeverityType, 'ignore'>, summary: ISummary): boolean {
  switch (severity) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    case 'info': {
      if (summary.info > 0) {
        return true
      }
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    case 'warn': {
      if (summary.warn > 0) {
        return true
      }
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    case 'error': {
      if (summary.error > 0) {
        return true
      }
    }
    default:
      return false
  }
}
