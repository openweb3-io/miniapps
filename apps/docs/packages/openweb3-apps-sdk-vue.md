---
outline: [ 2, 3 ]
---

# @openweb3-apps/sdk-vue

<p style="display: inline-flex; gap: 8px">
  <a href="https://npmjs.com/package/@openweb3-apps/sdk-vue">
    <img src="https://img.shields.io/npm/v/@openweb3-apps/sdk-vue?logo=npm"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@openweb3-apps/sdk-vue"/>
  <a href="https://github.com/openweb3-io/miniapps/tree/master/packages/sdk-vue">
    <img src="https://img.shields.io/badge/source-black?logo=github"/>
  </a>
</p>

Vue.js package providing utilities that developers may find useful when developing a mini
application.

> [!TIP]
> Since this package offers utility functions that extend the functionality
> of [@openweb3-apps/sdk](./openweb3-apps-sdk/2-x.md), it is recommended to review the SDK package
> documentation first.

## Installation

Before proceeding, it is assumed that you have already installed the `vue` package, as it is a
peer dependency of this package.

::: code-group

```bash [pnpm]
pnpm i @openweb3-apps/sdk-vue
```

```bash [npm]
npm i @openweb3-apps/sdk-vue
```

```bash [yarn]
yarn add @openweb3-apps/sdk-vue
```

:::

> [!INFO]
> This package fully re-exports the [@openweb3-apps/sdk](./openweb3-apps-sdk/2-x) package, so
> you don't need to install it separately.

## Usage

Here is a simple usage example of the package:

:::code-group

```tsx [index.tsx]
import { createApp } from 'vue';
import { init, backButton } from '@openweb3-apps/sdk-vue';

import { BackButton } from './BackButton.vue';

// Initialize the package.
init();

const app = createApp(BackButton);

// Mount the Back Button, so we will work with 
// the actual component properties.
backButton.mount();

app.mount('#root');
```

```vue [BackButton.vue]
/**
 * Component which controls the Back Button visibility.
 */
<script setup lang="ts">
import { watchEffect, onMounted, onUnmounted } from 'vue';
import { backButton, useSignal } from '@openweb3-apps/sdk-vue';

const isVisible = useSignal(backButton.isVisible);

watchEffect(() => {
  console.log('The button is', isVisible.value ? 'visible' : 'invisible');
});

onMounted(() => {
  backButton.show();
});

onUnmounted(() => {
  backButton.hide();
});
</script>

<template></template>
```

:::

## Hooks

### `useSignal`

A helper that allows you to use our [signals](./openweb3-apps-signals.md) in the application. It
returns a Vue ref which updates every time, our signal changes.

```vue
<script setup lang="ts">
import { watchEffect, onMounted, onUnmounted } from 'vue';
import { backButton, useSignal } from '@openweb3-apps/sdk-vue';

const isVisible = useSignal(backButton.isVisible);

watchEffect(() => {
  console.log('The button is', isVisible.value ? 'visible' : 'invisible');
});

onMounted(() => {
  backButton.show();
});

onUnmounted(() => {
  backButton.hide();
});
</script>

<template></template>
```

### `useLaunchParams`

A function that returns the mini application's launch parameters.

```vue
<script setup lang="ts">
import { useLaunchParams } from '@openweb3-apps/sdk-vue';

const lp = useLaunchParams();
</script>

<template>
  <div>Start param: {{ lp.startParam }}</div>
</template>
```
