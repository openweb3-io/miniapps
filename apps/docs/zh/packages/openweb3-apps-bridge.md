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

Openweb3 迷你应用程序的最底层通信层。

本软件包为在 Openweb3
Mini Apps 平台上开发应用程序提供基本实用程序和类型。

虽然开发者可以单独使用该软件包，但建议使用更高级别的软件包
，如 [@openweb3-apps/sdk](openweb3-apps-sdk/2-x) 。

## 安装

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

## 使用方法

下面是一个如何使用该软件包的基本示例。 有关详细信息，请参阅
文档中的后续文章。

```ts
import {
  defineEventHandlers,
  on,
  postEvent,
} from '@openweb3-apps/bridge';

// Define Mini Apps event handlers to receive 
// events from the Openweb3 native application.




postEvent('web_app_setup_back_button', { is_visible: true });

const off = on('back_button_pressed', () => {
  postEvent('web_app_setup_back_button', { is_visible: false });
  off();
})；
```
