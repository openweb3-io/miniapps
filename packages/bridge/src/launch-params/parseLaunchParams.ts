import { launchParams, type LaunchParams } from '@openweb3-apps/transformers';

/**
 * Parses value as launch parameters.
 * @param value - value to parse.
 */
export function parseLaunchParams(value: unknown): LaunchParams {
  return launchParams()(value);
}
