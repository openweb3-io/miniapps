import { signal } from '@openweb3-apps/signals';

/**
 * Target origin used by the `postEvent` method.
 *
 * You don't need to override this value until you know what you are doing.
 * @default 'https://web.openweb3.io'
 */
export const $targetOrigin = signal('https://web.openweb3.io');
