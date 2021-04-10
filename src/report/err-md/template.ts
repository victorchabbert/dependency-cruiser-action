import type {IForbiddenRuleType, IRequiredRuleType, ISummary, IViolation, SeverityType} from 'dependency-cruiser'
import {markdownTable} from 'markdown-table'

export function markdownLink(name: string, link: string): string {
  return `[${name}](${link})`
}

function plurial(count: number, singular: string, plurial: string): string {
  if (count > 1) {
    return `${count} ${plurial}`
  }
  return `${count} ${singular}`
}

function difference(main: number, diff?: number): string {
  if (diff === undefined) {
    return ''
  } else {
    const calc = main - diff
    const sign = Math.sign(calc)
    const signString = sign === 0 || sign === -0 ? '' : sign > 0 ? '+' : '-'
    return ` *(${signString}${calc})*`
  }
}

export type RulesSummary = (IForbiddenRuleType | IRequiredRuleType) & {count: number}
export type SummaryData = Pick<ISummary, 'error' | 'info' | 'totalCruised' | 'totalDependenciesCruised' | 'warn'> & {
  rules: RulesSummary[]
}
function summary(data: SummaryData, diffData?: ISummary): string {
  const {totalCruised, totalDependenciesCruised, error, info, warn, rules} = data
  const summaryDetails = [
    [plurial(totalCruised, 'module', 'modules'), difference(totalCruised, diffData?.totalCruised)],
    totalDependenciesCruised !== undefined
      ? [
          plurial(totalDependenciesCruised, 'dependency', 'dependencies'),
          difference(totalDependenciesCruised, diffData?.totalDependenciesCruised)
        ]
      : undefined,
    [plurial(error, 'error', 'errors'), difference(error, diffData?.error)],
    [plurial(warn, 'warning', 'warning'), difference(warn, diffData?.warn)],
    [`${info} informational`, difference(info, diffData?.info)]
  ]
    .filter(Boolean)
    .map(item => item?.join(''))
    .join(' · ')

  return `**${summaryDetails}**

${markdownTable(
  [
    ['severity', 'rule', '# violations', 'explanation'],
    ...rules
      .filter(rule => rule.count > 0)
      .map(rule => [rule.severity ?? '', rule.name ?? '', `${rule.count}` ?? '', rule.comment ?? ''])
  ],
  {align: 'l'}
)}
`
}

export type DetailsData = Record<SeverityType, IViolation[]>
function details(data: DetailsData): string {
  const severityOrder: SeverityType[] = ['error', 'warn', 'info', 'ignore']

  return severityOrder
    .map(severity => {
      const violations = data[severity]
      if (violations.length > 0) {
        return `### ${severity}

${markdownTable(
  [['rule', 'from', 'to'], ...violations.map(violation => [violation.rule.name, violation.from, violation.to])],
  {align: 'l'}
)}
`
      } else {
        return undefined
      }
    })
    .filter(Boolean)
    .join('\n')
}

export type RenderData = {
  summary: SummaryData
  diff?: {
    data: ISummary
    branch: string
  }
  details: DetailsData
}
export function render(data: RenderData): string {
  const diffMessage = data.diff !== undefined ? `_Comparing with ${data.diff.branch} branch_` : ''
  return `### Summary
${summary(data.summary, data.diff?.data)}
${diffMessage}

<details>
<summary>View details</summary>

${details(data.details)}

</details>
`
}
