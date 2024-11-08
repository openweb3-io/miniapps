import { expect, it } from 'vitest';

import { hasWebviewProxy } from './hasWebviewProxy.js';

it('should return true if passed object contains path property "Openweb3WebviewProxy.postEvent" and "postEvent" is a function property.', () => {
  expect(hasWebviewProxy({})).toBe(false);
  expect(hasWebviewProxy({ Openweb3WebviewProxy: {} })).toBe(false);
  expect(hasWebviewProxy({ Openweb3WebviewProxy: { postEvent: [] } })).toBe(false);
  expect(hasWebviewProxy({
    Openweb3WebviewProxy: {
      postEvent: () => {
      },
    },
  })).toBe(true);
});
