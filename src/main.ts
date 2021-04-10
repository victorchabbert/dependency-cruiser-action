import {context, getOctokit} from '@actions/github'
import * as core from '@actions/core'
import * as coreUtils from './utils/coreUtils'
import {cruise} from './cruise'
import {failOnStringToSeverityType, shouldFail, title} from './shared'
import markdownReporter from './report/err-md'
import {comment} from './comment'
import type {IReporterOutput} from 'dependency-cruiser'

async function run(): Promise<void> {
  try {
    const {payload, repo} = context
    const pr = payload.pull_request
    const config = core.getInput('config', {required: true})
    const input = coreUtils.getInputAsArray('input', {required: true})
    const severityType = failOnStringToSeverityType(core.getInput('failOn'))
    const directory = core.getInput('installDirectory')
    const skipInstall = coreUtils.getInputAsBoolean('skipInstall')
    const diff = coreUtils.getInputAsBoolean('diff')

    if (!pr) {
      throw new Error('No PR found. Only pull_request workflows are supported.')
    }
    const octokit = getOctokit(core.getInput('github_token', {required: true}))

    const prReporter = await cruise(undefined, directory, skipInstall, config, input)
    let baseReporter: IReporterOutput | undefined = undefined
    if (diff) {
      core.debug(`Diffing result with ${pr['base'].ref}`)
      try {
        baseReporter = await cruise(pr['base'].ref, directory, undefined, config, input)
        core.debug('Has diff output')
      } catch (e) {
        console.error(
          'Diff failed. This may be because the configuration does not exist on the base branch or that there is an error checking out the base branch'
        )
        console.error(e.message)
      }
    }
    const output = prReporter.output

    if (typeof output === 'string') {
      core.setFailed('Reporter output is a string. Expected an object.')
    } else {
      const prReport = markdownReporter(output, {
        link: `${pr['head'].repo.html_url}/blob/${pr['head'].sha}`,
        diff:
          baseReporter === undefined || typeof baseReporter.output === 'string'
            ? undefined
            : {data: baseReporter.output.summary, branch: pr['base'].ref}
      })

      const commentMessage = `${title}

${prReport.output}`

      core.debug('Commenting')
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
