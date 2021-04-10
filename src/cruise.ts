import * as core from '@actions/core'
import {exec} from '@actions/exec'
import {resolve, join} from 'path'
import {futureCruise, IReporterOutput} from 'dependency-cruiser'
import {Configuration, loadConfiguration} from './configuration'
import hasYarn from 'has-yarn'

async function checkout(branch: string): Promise<void> {
  try {
    await exec(`git fetch origin ${branch} --depth=1`)
  } catch (e) {
    core.debug(e)
    console.error(e.message)
  }

  await exec(`git checkout -f ${branch}`)
}

export async function cruise(
  branch: string | undefined,
  directory: string | undefined,
  skipInstall = false,
  configPath: string,
  filesAndFolders: string[]
): Promise<IReporterOutput> {
  core.debug(`Cruising for ${branch || 'pr branch'}`)
  const manager = hasYarn() ? 'yarn' : 'npm'

  if (branch !== undefined) {
    await checkout(branch)
  }

  if (!skipInstall) {
    await exec(`${manager} install`, [], {
      cwd: directory
    })
  }

  const options: Configuration = loadConfiguration(configPath)

  const {cruiseOptions, webpackResolveOptions, tsConfig, babelConfig} = options
  const cruiseResult: IReporterOutput = futureCruise(
    filesAndFolders,
    {...cruiseOptions, outputType: `plugin:${resolve(join(__dirname, '../static/report-identity'))}`},
    webpackResolveOptions,
    {tsConfig, babelConfig}
  )

  return cruiseResult
}
