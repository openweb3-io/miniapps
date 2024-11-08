import { it, expect } from 'vitest';
import { mockWindow } from 'test-utils';

import { defineEventHandlers } from './defineEventHandlers.js';
import { emitMiniAppsEvent } from '@/events/emitMiniAppsEvent.js';

it('should should specify emitMiniAppsEvent function by paths [window.Openweb3GameProxy_receiveEvent, window.Openweb3GameProxy.receiveEvent, window.Openweb3.WebView.receiveEvent]', () => {
  const wnd = {};
  mockWindow(wnd as any);
  defineEventHandlers();
  expect(wnd).toStrictEqual({
    Openweb3GameProxy_receiveEvent: emitMiniAppsEvent,
    Openweb3GameProxy: { receiveEvent: emitMiniAppsEvent },
    Openweb3: { WebView: { receiveEvent: emitMiniAppsEvent } },
  });
});