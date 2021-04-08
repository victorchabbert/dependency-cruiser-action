import type {IConfiguration} from 'dependency-cruiser'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import _extractDepcruiseConfig from 'dependency-cruiser/config-utl/extract-depcruise-config'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import _extractTSConfig from 'dependency-cruiser/config-utl/extract-ts-config'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import _extractWebpackResolveConfig from 'dependency-cruiser/config-utl/extract-webpack-resolve-config'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import _extractBabelConfig from 'dependency-cruiser/config-utl/extract-babel-config'

export function extractDepcruiseConfig(path: string): IConfiguration {
  return _extractDepcruiseConfig(path)
}

export function extractTSConfig(path: string): Record<string, unknown> {
  return _extractTSConfig(path)
}

export function extractWebackResolveConfig(path: string, environment?: string, args?: string): Record<string, unknown> {
  return _extractWebpackResolveConfig(path, environment, args)
}

export function extractBabelConfig(path: string): Record<string, unknown> {
  return _extractBabelConfig(path)
}
