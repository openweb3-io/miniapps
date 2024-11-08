import { emitMiniAppsEvent } from '@/events/emitMiniAppsEvent.js';

/**
 * Defines special handlers by known paths, which Openweb3 recognizes as ports to receive events.
 */
export function defineEventHandlers() {
  // Iterate over each path, where "receiveEvent" function should be
  // defined. This function is called by external environment in case,
  // it wants to emit some event.
  [
    ['Openweb3GameProxy_receiveEvent'], // Windows Phone.
    ['Openweb3GameProxy', 'receiveEvent'], // Desktop.
    ['Openweb3', 'WebView', 'receiveEvent'], // Android and iOS.
  ].forEach((path) => {
    // Path starts from the "window" object.
    let pointer = window as Record<string, any>;

    path.forEach((item, idx, arr) => {
      // We are on the last iteration, where function property name is passed.
      if (idx === arr.length - 1) {
        pointer[item] = emitMiniAppsEvent;
        return;
      }

      if (!(item in pointer)) {
        pointer[item] = {};
      }
      pointer = pointer[item];
    });
  });
}
