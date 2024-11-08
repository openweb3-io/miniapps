import { getStorageValue, setStorageValue } from '@openweb3-apps/toolkit';
import { serializeLaunchParams } from '@openweb3-apps/transformers';
import type { LaunchParams } from '@openweb3-apps/types';

import { parseLaunchParams } from './parseLaunchParams.js';

const STORAGE_KEY = 'launchParams';

/**
 * @returns Launch parameters stored in the session storage.
 * @throws Error if function was unable to extract launch parameters from the window location hash.
 */
export function retrieveFromStorage(): LaunchParams {
  return parseLaunchParams(getStorageValue(STORAGE_KEY) || '');
}

/**
 * Saves specified launch parameters in the session storage.
 * @param value - launch params to save.
 */
export function saveToStorage(value: LaunchParams): void {
  setStorageValue('launchParams', serializeLaunchParams(value));
}
