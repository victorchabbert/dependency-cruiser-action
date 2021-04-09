import {resolve, join} from 'path'
import {futureCruise, IReporterOutput} from 'dependency-cruiser'
import {Configuration, loadConfiguration} from './configuration'

export function cruise(config: string, filesAndFolders: string[]): IReporterOutput {
  const options: Configuration = loadConfiguration(config)

  const {cruiseOptions, webpackResolveOptions, tsConfig, babelConfig} = options
  const cruiseResult: IReporterOutput = futureCruise(
    filesAndFolders,
    {...cruiseOptions, outputType: `plugin:${resolve(join(__dirname, '../static/report-identity'))}`},
    webpackResolveOptions,
    {tsConfig, babelConfig}
  )

  return cruiseResult
}
