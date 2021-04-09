import type {ICruiseResult, IFlattenedRuleSet, IReporterOutput, IViolation, SeverityType} from 'dependency-cruiser'
import {DetailsData, render, RulesSummary, markdownLink} from './template'

function determineTo(violation: IViolation, linkPrefix?: string): string {
  if (violation.cycle !== undefined) {
    const cycle =
      linkPrefix !== undefined
        ? violation.cycle.map(cycle => markdownLink(cycle, `${linkPrefix}/${cycle}`))
        : violation.cycle
    return cycle.join(' &rightarrow;<br/>')
  }
  if (violation.via !== undefined) {
    const to = linkPrefix !== undefined ? markdownLink(violation.to, `${linkPrefix}/${violation.to}`) : violation.to
    const via =
      linkPrefix !== undefined ? violation.via.map(via => markdownLink(via, `${linkPrefix}/${via}`)) : violation.via
    return `${to}<br/>${via.join(' &rightarrow;<br/>')}`
  }

  if (violation.from === violation.to) {
    return ''
  }
  return linkPrefix !== undefined ? markdownLink(violation.to, `${linkPrefix}/${violation.to}`) : violation.to
}

type FormatViolationOptions = {
  link?: string
}
function formatViolation(violation: IViolation, options: FormatViolationOptions): IViolation {
  return {
    ...violation,
    from:
      options.link !== undefined ? markdownLink(violation.from, `${options.link}/${violation.from}`) : violation.from,
    to: determineTo(violation, options.link)
  }
}

function aggregateViolationsIntoRules(
  violations: IViolation[],
  ruleSetUsed: IFlattenedRuleSet | undefined
): RulesSummary[] {
  debugger
  if (ruleSetUsed === undefined) {
    return []
  }
  const violationCount = violations.reduce((count, violation) => {
    const currentCount = count[violation.rule.name]
    if (currentCount === undefined) {
      return {
        ...count,
        [violation.rule.name]: 1
      }
    } else {
      return {
        ...count,
        [violation.rule.name]: currentCount + 1
      }
    }
  }, {} as Record<string, number>)

  const returns: RulesSummary[] = [...(ruleSetUsed.forbidden ?? []), ...(ruleSetUsed.required ?? [])]
    .map(rule => {
      const count: number = rule.name === undefined ? 0 : violationCount[rule.name] ?? 0
      return {
        ...rule,
        count
      }
    })
    .sort((a, b) => (Math.sign(b.count - a.count) || a.name?.localeCompare(b.name || '')) ?? 1)

  return returns
}

type MarkdownOptions = {
  /**
   * Link files with the provided prefix
   */
  link?: string
}
function report(pResults: ICruiseResult, pOptions?: MarkdownOptions): string {
  if (pResults.summary.violations.length === 0) {
    return ''
  }

  const groupping = pResults.summary.violations.reduce(
    (output, violation) => {
      const formatedViolation = formatViolation(violation, {link: pOptions?.link})
      return {
        ...output,
        [violation.rule.severity]: [...output[violation.rule.severity], formatedViolation]
      }
    },
    {
      ignore: [],
      info: [],
      warn: [],
      error: []
    } as Record<SeverityType, IViolation[]>
  )

  const details = (Object.keys(groupping) as SeverityType[]).reduce(
    (sortedObject, key) => ({
      ...sortedObject,
      [key]: groupping[key].sort((a, b) => a.rule.name.localeCompare(b.rule.name))
    }),
    {} as DetailsData
  )

  return render({
    summary: {
      ...pResults.summary,
      rules: aggregateViolationsIntoRules(pResults.summary.violations, pResults.summary.ruleSetUsed)
    },
    details
  })
}

function markdownReporter(pResults: ICruiseResult, pOptions?: MarkdownOptions): IReporterOutput {
  return {
    output: report(pResults, pOptions),
    exitCode: 0
  }
}

export = markdownReporter
