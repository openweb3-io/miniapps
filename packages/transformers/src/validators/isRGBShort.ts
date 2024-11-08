import type { RGBShort } from '@openweb3-apps/types';

/**
 * Returns true in case, passed value has #RGB format.
 * @param value - value to check.
 */
export function isRGBShort(value: string): value is RGBShort {
  return /^#[\da-f]{3}$/i.test(value);
}
