# Scopes

This package is designed to give developers full control over its lifecycle, including the
initialization process. Therefore, there are no pre-initialized global scopes available for use;
developers must configure the scopes themselves.

By *scope*, we refer to a collection of related functionality grouped into a single entity. Examples
of scopes include `backButton` and `mainButton`. This design makes the SDK more intuitive and
efficient to use.

It's important to note that scopes are provided in the following forms:

💠**Components**. They are exported as both a variable and a set of functions simultaneously.
For instance, developers can work with the exported `backButton` variable or
its alternative function set: `showBackButton`, `mountBackButton`, etc.

⚙️**Utilities**. They are exported as a set of functions. These scopes are abstract and not grouped
into a single variable. Examples include `openLink`, `shareURL`, etc.

Effectively, exported variables are simply compositions of the same exported functions.
So, `backButton.isMounted` and `isBackButtonMounted` are essentially the same entity.

Here's an example:

```ts
import {
  backButton,
  hideBackButton,
  isBackButtonVisible,
} from '@openweb3-apps/sdk';

isBackButtonVisible(); // false

backButton.show();
// backButton.isVisible and isBackButtonVisible are the same 
// entity (signal). We can say the same about backButton.show 
// and showBackButton.
//
// backButton.isVisible() -> true
// isBackButtonVisible() -> true

hideBackButton();
// backButton.isVisible() -> false
// isBackButtonVisible() -> false
```

The key difference here lies in the final bundle size. Internally, the `backButton` export is
handled through the following code:

```ts
export * as backButton from 'somewhere';
```

When not using the package source code while building the application, the bundler is more likely to
make `backButton` a non-treeshakeable object. As a result, all dependencies from `somewhere` will be
bundled, slightly increasing the final bundle size (though not by much).

## Optimizing Bundle

> [!TIP]
> The SDK works efficiently out of the box, so there is generally no need to follow the
> optimizations described in this section. However, these guidelines can be helpful if you want to
> maximize the package's efficiency in specific scenarios.

Let’s look at how we can use the package more efficiently:

- Using functions exclusively allows the bundler to tree-shake unused scope code.

```ts
import { showBackButton, backButton } from '@openweb3-apps/sdk';

showBackButton();
// Only showBackButton's source code will be bundled.

backButton.show();
// All backButton dependencies will be bundled, even 
// if not used in the code: backButton.show(), 
// backButton.hide(), backButton.isVisible(), etc.
```

- Configure the bundler to use the source code instead of the built version.

```ts
import { backButton } from '@openweb3-apps/sdk';

backButton.show();
// Only backButton.show's source code will be bundled 
// because the bundler is smart enough to understand 
// that backButton.show is just the showBackButton 
// function, so only its source code is bundled.
```

Here's an example of a Vite config using the `resolve` option:

```ts
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@openweb3-apps/sdk': resolve('node_modules/@openweb3-apps/sdk/src'),
    },
  },
});
```
