import {
  createCbCollector,
  defineEventHandlers,
  on,
  removeEventHandlers,
} from '@openweb3-apps/bridge';

import { postEvent, configure, type ConfigureOptions } from '@/scopes/globals.js';

export interface InitOptions extends ConfigureOptions {
  /**
   * True if SDK should accept styles sent from the Openweb3 application.
   * @default true
   */
  acceptCustomStyles?: boolean;
}

/**
 * Initializes the SDK allowing it to properly handle events, sent from the native Openweb3
 * application.
 * @param options - function options.
 * @returns A function, to perform a cleanup.
 */
export function init(options?: InitOptions): VoidFunction {
  // Configure the package global dependencies.
  configure(options);

  // Define event handlers, so we could receive the events from the Openweb3 application.
  defineEventHandlers();

  const [addCleanup, cleanup] = createCbCollector(
    on('reload_iframe', () => {
      postEvent('iframe_will_reload');
      window.location.reload();
    }),
    removeEventHandlers,
  );

  const { acceptCustomStyles = true } = options || {};
  if (acceptCustomStyles) {
    const style = document.createElement('style');
    style.id = 'openweb3-custom-styles';
    document.head.appendChild(style);

    addCleanup(
      on('set_custom_style', html => {
        // It is safe to use innerHTML here as long as style tag has a special behavior related
        // to the specified content.
        // In case any script will be passed here, it will not be executed, so XSS is not possible.
        style.innerHTML = html;
      }),
      () => {
        document.head.removeChild(style);
      },
    );
  }

  // Notify Openweb3 that the application is ready.
  //
  // This will result in sending style tag html content from the Openweb3 web application.
  // We should call this method also to start receiving "reload_iframe" events from the Openweb3
  // application.
  //
  // It really has no effect outside non-Openweb3 web environment.
  postEvent('iframe_ready', { reload_supported: true });

  return cleanup;
}