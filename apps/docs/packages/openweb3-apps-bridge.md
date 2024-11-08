# @openweb3-apps/bridge

<p style="display: flex; gap: 8px; min-height: 20px">
  <a href="https://npmjs.com/package/@openweb3-apps/bridge">
    <img src="https://img.shields.io/npm/v/@openweb3-apps/bridge?logo=npm"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@openweb3-apps/bridge"/>
  <a href="https://github.com/openweb3-io/miniapps/tree/master/packages/bridge">
    <img src="https://img.shields.io/badge/source-black?logo=github"/>
  </a>
</p>

The lowest level communication layer with Openweb3 Mini Apps.

This package provides fundamental utilities and types for developing applications on the Openweb3
Mini Apps platform.

While a developer can use this package alone, it's recommended to use a higher-level package
like [@openweb3-apps/sdk](openweb3-apps-sdk/2-x).

## Installation

::: code-group

```bash [pnpm]
pnpm i @openweb3-apps/bridge
```

```bash [npm]
npm i @openweb3-apps/bridge
```

```bash [yarn]
yarn add @openweb3-apps/bridge
```

:::

## Usage

Here’s a basic example of how to use this package. For more details, refer to the next articles in
the documentation.

```ts
import {
  defineEventHandlers,
  on,
  postEvent,
} from '@openweb3-apps/bridge';

// Define Mini Apps event handlers to receive 
// events from the Openweb3 native application.
defineEventHandlers();

// Show the back button, wait for it to be clicked once,
// then hide it.
postEvent('web_app_setup_back_button', { is_visible: true });

const off = on('back_button_pressed', () => {
  postEvent('web_app_setup_back_button', { is_visible: false });
  off();
});
```