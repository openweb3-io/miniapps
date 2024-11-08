# Back Button

The 💠[component](../scopes.md) responsible for the Openweb3 Mini
Apps [back button](../../../../platform/back-button.md).

## Checking Support

To check if the back button is supported by the current Openweb3 Mini Apps version, use the
`isSupported` method:

::: code-group

```ts [Variable]
import { backButton } from '@openweb3-apps/sdk';

backButton.isSupported(); // boolean
```

```ts [Functions]
import { isBackButtonSupported } from '@openweb3-apps/sdk';

isBackButtonSupported(); // boolean
```

:::

## Mounting

Before using this component, it is necessary to mount it to work with properly configured
properties. To do so, use the `mount` method. It will update the `isMounted` signal property.

::: code-group

```ts [Variable]
import { backButton } from '@openweb3-apps/sdk';

backButton.mount();
backButton.isMounted(); // true
```

```ts [Functions]
import { mountBackButton, isBackButtonMounted } from '@openweb3-apps/sdk';

mountBackButton();
isBackButtonMounted(); // true
```

:::

To unmount, use the `unmount` method:

::: code-group

```ts [Variable]
backButton.unmount();
backButton.isMounted(); // false
```

```ts [Functions]
import { unmountBackButton, isBackButtonMounted } from '@openweb3-apps/sdk';

unmountBackButton();
isBackButtonMounted(); // false
```

:::

## Showing and Hiding

To change the button's visibility, use the `hide()` and `show()` methods. These methods update
the `isVisible` signal property value.

::: code-group

```ts [Variable]
backButton.show();
backButton.isVisible(); // true

backButton.hide();
backButton.isVisible(); // false
```

```ts [Functions]
import {
  showBackButton,
  hideBackButton,
  isBackButtonVisible,
} from '@openweb3-apps/sdk';

showBackButton();
isBackButtonVisible(); // true

hideBackButton();
isBackButtonVisible(); // false
```

:::

## Tracking Click

To add a button click listener, use the `onClick` method. It returns a function to remove the bound
listener. Alternatively, you can use the `offClick` method.

::: code-group

```ts [Variable]
function listener() {
  console.log('Clicked!');
}

const offClick = backButton.onClick(listener);
offClick();
// or
backButton.onClick(listener);
backButton.offClick(listener);
```

```ts [Functions]
import { onBackButtonClick, offBackButtonClick } from '@openweb3-apps/sdk';

function listener() {
  console.log('Clicked!');
}

const offClick = onBackButtonClick(listener);
offClick();
// or
onBackButtonClick(listener);
offBackButtonClick(listener);
```

:::
