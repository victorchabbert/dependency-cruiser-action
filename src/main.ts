import {resolve, join} from 'path'
import * as core from '@actions/core'
import {futureCruise, IReporterOutput} from 'dependency-cruiser'
import {Configuration, loadConfiguration} from './configuration'

const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE = ['example']
async function run(): Promise<void> {
  try {
    let options: Configuration
    const config = core.getInput('config')
    try {
      options = loadConfiguration(config)
    } catch (e) {
      console.error(e)
      core.debug(e.toString())
      core.setFailed(e.message)
      process.exit(1)
    }

    const {cruiseOptions, webpackResolveOptions, tsConfig, babelConfig} = options
    const cruiseResult: IReporterOutput = futureCruise(
      ARRAY_OF_FILES_AND_DIRS_TO_CRUISE,
      {...cruiseOptions, outputType: `plugin:${resolve(join(__dirname, './err-md'))}`},
      webpackResolveOptions,
      {tsConfig, babelConfig}
    )
    console.dir(cruiseResult.output, {depth: 10})
  } catch (error) {
    console.error(error)
    core.debug(error)
    core.setFailed(error.message)
  }
}

run()
