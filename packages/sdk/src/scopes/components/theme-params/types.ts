import type { ThemeParams } from '@openweb3-apps/bridge';

export interface GetCssVarNameFn {
  /**
   * @param property - palette key.
   * @returns Computed complete CSS variable name.
   */
  (property: Extract<keyof ThemeParams, string>): string;
}

export type { ThemeParams, ThemeParamsKey } from '@openweb3-apps/bridge';
