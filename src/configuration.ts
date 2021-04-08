import type {IConfiguration, ICruiseOptions, IFlattenedRuleSet} from 'dependency-cruiser'
import {
  extractBabelConfig,
  extractDepcruiseConfig,
  extractTSConfig,
  extractWebackResolveConfig
} from './dependencyCruiserExports'
import {removeUndefinedTopLevelProperties} from './utils/object'
import type {ObjectWithIndex} from './utils/types'

function configurationToFlattenedRuleSet(config: IConfiguration): IFlattenedRuleSet {
  const {forbidden, allowed, allowedSeverity, required} = config
  const flattenedRuleSet: ObjectWithIndex<IFlattenedRuleSet> = {
    forbidden: forbidden,
    allowed: allowed,
    allowedSeverity: allowedSeverity,
    required: required
  }
  return removeUndefinedTopLevelProperties(flattenedRuleSet)
}

function configurationToOptionalConfiguration(
  config: IConfiguration
): Pick<
  ICruiseOptions,
  | 'doNotFollow'
  | 'exclude'
  | 'includeOnly'
  | 'focus'
  | 'collapse'
  | 'maxDepth'
  | 'moduleSystems'
  | 'args'
  | 'baseDir'
  | 'prefix'
  | 'preserveSymlinks'
  | 'externalModuleResolutionStrategy'
  | 'forceDeriveDependents'
  | 'forceDeriveDependents'
  | 'combinedDependencies'
  | 'exoticRequireStrings'
  | 'reporterOptions'
  | 'enhancedResolveOptions'
> {
  const options = config.options
  return removeUndefinedTopLevelProperties({
    doNotFollow: options?.doNotFollow,
    exclude: options?.exclude,
    includeOnly: options?.includeOnly,
    focus: options?.focus,
    collapse: options?.collapse,
    maxDepth: options?.maxDepth,
    moduleSystems: options?.moduleSystems,
    args: options?.args,
    baseDir: options?.baseDir,
    prefix: options?.prefix,
    preserveSymlinks: options?.preserveSymlinks,
    forceDeriveDependents: options?.forceDeriveDependents,
    combinedDependencies: options?.combinedDependencies,
    exoticRequireStrings: options?.exoticRequireStrings,
    reporterOptions: options?.reporterOptions,
    enhancedResolveOptions: options?.enhancedResolveOptions
  })
}

function configurationToCruiseOptions(rulesFile: string, config: IConfiguration): ICruiseOptions {
  const ruleSet = configurationToFlattenedRuleSet(config)
  const optionalConfiguration = configurationToOptionalConfiguration(config)

  const cruiseConfiguration: ICruiseOptions = {
    validate: true,
    ruleSet,
    rulesFile,
    ...optionalConfiguration
  }

  return cruiseConfiguration
}

function loadTsConfig(
  config: IConfiguration & {
    // TODO: missing in official types
    options?: {
      tsConfig?: {fileName?: string}
    }
  }
): Record<string, unknown> | undefined {
  const tsConfigFile = config.options?.tsConfig?.fileName
  if (tsConfigFile) {
    return extractTSConfig(tsConfigFile)
  } else {
    return undefined
  }
}

function loadWebpackResolveOptions(
  config: IConfiguration & {
    // TODO: missing in official types
    options?: {
      webpackConfig?: {fileName?: string; env?: string; arguments?: string}
    }
  }
): Record<string, unknown> | undefined {
  const webpackConfigObject = config.options?.webpackConfig

  if (webpackConfigObject !== undefined && webpackConfigObject.fileName !== undefined) {
    return extractWebackResolveConfig(
      webpackConfigObject.fileName,
      webpackConfigObject?.env ?? undefined,
      webpackConfigObject?.arguments ?? undefined
    )
  } else {
    return undefined
  }
}

function loadBabelConfig(
  config: IConfiguration & {
    // TODO: not in official typings
    options?: {babelConfig?: {fileName?: string}}
  }
): Record<string, unknown> | undefined {
  const babelFilePath = config.options?.babelConfig?.fileName

  if (babelFilePath) {
    return extractBabelConfig(babelFilePath)
  } else {
    return undefined
  }
}

export type Configuration = {
  cruiseOptions: ICruiseOptions
  webpackResolveOptions?: Record<string, unknown>
  tsConfig?: Record<string, unknown>
  babelConfig?: Record<string, unknown>
}
export function loadConfiguration(path: string): Configuration {
  let depcruiseConfig: IConfiguration
  try {
    depcruiseConfig = extractDepcruiseConfig(path)
    return {
      cruiseOptions: configurationToCruiseOptions(path, depcruiseConfig),
      webpackResolveOptions: loadWebpackResolveOptions(depcruiseConfig),
      tsConfig: loadTsConfig(depcruiseConfig),
      babelConfig: loadBabelConfig(depcruiseConfig)
    }
  } catch (e) {
    throw new ConfigurationError('Error loading configuration', e)
  }
}

class ConfigurationError extends Error {
  name = 'ConfigurationError'

  constructor(message: string, public nested: Error) {
    super(message)
  }
}
