import {context, getOctokit} from '@actions/github'
import * as core from '@actions/core'
import * as coreUtils from './utils/coreUtils'
import {cruise} from './cruise'
import {failOnStringToSeverityType, shouldFail, title} from './shared'
import markdownReporter from './report/err-md'
import {comment} from './comment'

async function run(): Promise<void> {
  try {
    const {payload, repo} = context
    const pr = payload.pull_request
    const severityType = failOnStringToSeverityType(core.getInput('fail-on'))

    if (!pr) {
      throw new Error('No PR found. Only pull_request workflows are supported.')
    }
    const octokit = getOctokit(core.getInput('github_token', {required: true}))

    const reporter = cruise(
      core.getInput('config', {required: true}),
      coreUtils.getInputAsArray('input', {required: true})
    )
    const output = reporter.output
    if (typeof output === 'string') {
      core.setFailed('Reporter output is a string. Expected an object.')
    } else {
      const report = markdownReporter(output, {link: `${pr['head'].repo.html_url}/blob/${pr['head'].sha}`})
      const commentMessage = `${title}

${report.output}`

      comment(octokit, repo, pr, commentMessage)
      if (severityType !== undefined && shouldFail(severityType, output.summary)) {
        core.setFailed(`Dependency cruiser failed on '${severityType}' or above.`)
      }
    }
  } catch (error) {
    core.debug(error)
    core.setFailed(error.message)
  }
}

run()
