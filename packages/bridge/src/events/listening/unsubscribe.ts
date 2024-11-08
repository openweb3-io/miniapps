import type { SubscribeListenerFn } from '@openweb3-apps/signals';

import { $lastEvent, LastEvent } from '@/events/listening/lastEvent.js';

/**
 * Remove a subscriber listening to all events sent from the native Openweb3 application.
 * @param listener - event listener to remove.
 * @param once - had this listener to be called only once.
 * @returns Function to remove bound event listener.
 */
export function unsubscribe(
  listener: SubscribeListenerFn<LastEvent | undefined>,
  once?: boolean,
): void {
  $lastEvent.unsub(listener, once);
}
