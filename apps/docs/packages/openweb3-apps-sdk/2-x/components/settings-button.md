# Settings Button

The 💠[component](../scopes.md) responsible for the Openweb3 Mini
Apps [settings button](../../../../platform/settings-button.md).

## Checking Support

To check if the settings button supported by the current Openweb3 Mini Apps version, the
`isSupported` method is used:

::: code-group

```ts [Variable]
import { settingsButton } from '@openweb3-apps/sdk';

settingsButton.isSupported(); // boolean
```

```ts [Functions]
import { isSettingsButtonSupported } from '@openweb3-apps/sdk';

isSettingsButtonSupported(); // boolean
```

:::

## Mounting

Before using the component, it is necessary to mount it to work with properly configured properties.
To do so, use the `mount` method. It will update the `isMounted` signal property.

::: code-group

```ts [Variable]
import { settingsButton } from '@openweb3-apps/sdk';

settingsButton.mount();
settingsButton.isMounted(); // true
```

```ts [Functions]
import {
  mountSettingsButton,
  isSettingsButtonMounted,
} from '@openweb3-apps/sdk';

mountSettingsButton();
isSettingsButtonMounted(); // true
```

:::

To unmount, use the `unmount` method:

::: code-group

```ts [Variable]
settingsButton.unmount();
settingsButton.isMounted(); // false
```

```ts [Functions]
import { 
  unmountSettingsButton,
  isSettingsButtonMounted,
} from '@openweb3-apps/sdk';

unmountSettingsButton();
isSettingsButtonMounted(); // false
```

:::

## Showing and Hiding

To change the button's visibility, use the `hide()` and `show()` methods. These methods update
the `isVisible` signal property value.

::: code-group

```ts [Variable]
settingsButton.show();
settingsButton.isVisible(); // true

settingsButton.hide();
settingsButton.isVisible(); // false
```

```ts [Functions]
import {
  showSettingsButton,
  hideSettingsButton,
  isSettingsButtonVisible,
} from '@openweb3-apps/sdk';

showSettingsButton();
isSettingsButtonVisible(); // true

hideSettingsButton();
isSettingsButtonVisible(); // false
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

const offClick = settingsButton.onClick(listener);
offClick();
// or
settingsButton.onClick(listener);
settingsButton.offClick(listener);
```

```ts [Functions]
import { onSettingsButtonClick, offSettingsButtonClick } from '@openweb3-apps/sdk';

function listener() {
  console.log('Clicked!');
}

const offClick = onSettingsButtonClick(listener);
offClick();
// or
onSettingsButtonClick(listener);
offSettingsButtonClick(listener);
```

:::
