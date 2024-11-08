import { expect, it } from 'vitest';
import { mockWindow } from 'test-utils';

import { removeEventHandlers } from './removeEventHandlers.js';

it('should delete window properties: Openweb3GameProxy_receiveEvent, Openweb3GameProxy, Openweb3', () => {
  const wnd = {
    Openweb3GameProxy_receiveEvent: {},
    Openweb3GameProxy: { receiveEvent: {} },
    Openweb3: { WebView: { receiveEvent: {} } },
  };
  mockWindow(wnd as any);
  removeEventHandlers();
  expect(wnd).toStrictEqual({});
});