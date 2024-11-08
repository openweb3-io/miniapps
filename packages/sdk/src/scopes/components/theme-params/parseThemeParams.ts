import { themeParams } from '@openweb3-apps/transformers';
import type { ThemeParams } from '@openweb3-apps/bridge';

/**
 * Parses incoming value as theme parameters.
 * @param value - value to parse.
 */
export function parseThemeParams(value: unknown): ThemeParams {
  return themeParams()(value);
}
