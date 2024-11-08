# @openweb3-apps/solid-router-integration

<p style="display: inline-flex; gap: 8px">
  <a href="https://npmjs.com/package/@openweb3-apps/solid-router-integration">
    <img src="https://img.shields.io/npm/v/@openweb3-apps/solid-router-integration?logo=npm"/>
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@openweb3-apps/solid-router-integration"/>
  <a href="https://github.com/openweb3-io/miniapps/tree/master/packages/solid-router-integration">
    <img src="https://img.shields.io/badge/source-black?logo=github"/>
  </a>
</p>

Openweb3 Mini Apps [Navigator](openweb3-apps-sdk/1-x/navigation.md) integration
for [@solidjs/router](https://www.npmjs.com/package/@solidjs/router).

## Installation

::: code-group

```bash [pnpm]
pnpm i @openweb3-apps/solid-router-integration
```

```bash [npm]
npm i @openweb3-apps/solid-router-integration
```

```bash [yarn]
yarn add @openweb3-apps/solid-router-integration
```

:::

## Usage

At the moment, this package provides the only 1 function, which creates the integration for
`@solidjs/router` Router - `createRouter`.

Here is how it could be used:

```jsx
import { Routes, Route, Navigate } from '@solidjs/router';
import { onCleanup } from 'solid-js';
import { initNavigator } from '@openweb3-apps/sdk-solid';
import { createRouter } from '@openweb3-apps/solid-router-integration';

import { IndexPage } from './IndexPage.js';

function App() {
  // We should create navigator to pass it to integration creation.
  const navigator = initNavigator('app-navigator-state');

  // Then, to allow this navigator update current browser history, 
  // we should attach it. Otherwise, it will work in memory mode.
  void navigator.attach();
  onCleanup(() => {
    navigator.detach();
  });

  const Router = createRouter(navigator);

  return (
    <Router>
      <Routes>
        <Route path={'/'} component={IndexPage}/>
        <Route path={'*'} element={<Navigate href={'/'}/>}/>
      </Routes>
    </Router>
  );
}
```

You can learn more about how to use it real world applications using
our [Solid template](https://github.com/openweb3-io/solidjs-template).

