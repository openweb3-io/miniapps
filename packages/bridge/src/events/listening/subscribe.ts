import type { RemoveListenerFn } from '@openweb3-apps/signals';

import { lastEventSignal } from '@/events/listening/lastEvent.js';
import type { SubscribeListener } from '@/events/listening/types.js';

/**
 * Subscribes to all events sent from the native Openweb3 application.
 * @param listener - event listener to bind.
 * @param once - should this listener be called only once.
 * @returns Function to remove bound event listener.
 */
export function subscribe(listener: SubscribeListener, once?: boolean): RemoveListenerFn {
  return lastEventSignal().sub(listener, once);
}
