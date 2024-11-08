import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
} from '@openweb3-apps/sdk-vue';

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  // Set @openweb3-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Openweb3 Desktop, Android, iOS, etc. Also, configure
  // the package.
  initSDK();

  // Mount all components used in the project.
  backButton.isSupported() && backButton.mount();
  miniApp.mount();
  themeParams.mount();
  initData.restore();

  void viewport.mount().then(() => {
    // Define components-related CSS variables.
    viewport.bindCssVars();
    miniApp.bindCssVars();
    themeParams.bindCssVars();
  }).catch((e: any) => {
    console.error('Something went wrong mounting the viewport', e);
  });

  // Add Eruda if needed.
  debug && import('eruda')
    .then((lib) => lib.default.init())
    .catch(console.error);
}
