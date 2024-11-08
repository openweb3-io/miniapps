import { initData } from '@openweb3-apps/transformers';
import type { InitData } from '@openweb3-apps/bridge';

/**
 * Parses an incoming value as init data.
 * @param value - value to check.
 * @throws {} Parsing errors.
 */
export function parseInitData(value: unknown): InitData {
  return initData()(value);
}