import { useMemo } from 'react';
import { retrieveLaunchParams, type LaunchParams } from '@openweb3-apps/sdk';

/**
 * Retrieves Mini Apps launch parameters.
 */
export function useLaunchParams(): LaunchParams {
  return useMemo(retrieveLaunchParams, []);
}
