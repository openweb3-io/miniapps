import { expect, it } from 'vitest';

import { $targetOrigin } from './$targetOrigin.js';

it('should have initial value "https://web.openweb3.io"', () => {
  expect($targetOrigin()).toBe('https://web.openweb3.io');
});
