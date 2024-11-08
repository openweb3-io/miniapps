import { object, fn } from '@openweb3-apps/transformers';

interface WithWebviewProxy {
  Openweb3WebviewProxy: {
    postEvent: (...args: unknown[]) => unknown;
  };
}

const webViewProxy = object<WithWebviewProxy>({
  Openweb3WebviewProxy: object({ postEvent: fn() })(),
});

/**
 * Returns true in case, passed value contains path `Openweb3WebviewProxy.postEvent` property and
 * `postEvent` is a function.
 * @param value - value to check.
 */
export function hasWebviewProxy<T>(value: T): value is T & WithWebviewProxy {
  return webViewProxy().isValid(value);
}
