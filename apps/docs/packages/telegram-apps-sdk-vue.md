---
outline: [ 2, 3 ]
---

# @telegram-apps/sdk-vue

<p style="display: inline-flex; gap: 8px">
  <a href="https://npmjs.com/package/@telegram-apps/sdk-vue">
    <img src="https://img.shields.io/npm/v/@telegram-apps/sdk-vue?logo=npm"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@telegram-apps/sdk-vue"/>
  <a href="https://github.com/Telegram-Mini-Apps/telegram-apps/tree/master/packages/sdk-vue">
    <img src="https://img.shields.io/badge/source-black?logo=github"/>
  </a>
</p>

Vue.js package providing utilities that developers may find useful when developing a mini
application.

> [!TIP]
> Since this package offers utility functions that extend the functionality
> of [@telegram-apps/sdk](./telegram-apps-sdk/2-x.md), it is recommended to review the SDK package
> documentation first.

## Installation

Before proceeding, it is assumed that you have already installed the `vue` package, as it is a
peer dependency of this package.

::: code-group

```bash [pnpm]
pnpm i @telegram-apps/sdk-vue
```

```bash [npm]
npm i @telegram-apps/sdk-vue
```

```bash [yarn]
yarn add @telegram-apps/sdk-vue
```

:::

> [!INFO]
> This package fully re-exports the [@telegram-apps/sdk](./telegram-apps-sdk/2-x) package, so
> you don't need to install it separately.

## Usage

Here is a simple usage example of the package:

:::code-group

```tsx [index.tsx]
import { createApp } from 'vue';
import { init, backButton } from '@telegram-apps/sdk-vue';

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
import { backButton, useSignal } from '@telegram-apps/sdk-vue';

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

A helper that allows you to use our [signals](./telegram-apps-signals.md) in the application. It
returns a Vue ref which updates every time, our signal changes.

```vue
<script setup lang="ts">
import { watchEffect, onMounted, onUnmounted } from 'vue';
import { backButton, useSignal } from '@telegram-apps/sdk-vue';

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
import { useLaunchParams } from '@telegram-apps/sdk-vue';

const lp = useLaunchParams();
</script>

<template>
  <div>Start param: {{ lp.startParam }}</div>
</template>
```
