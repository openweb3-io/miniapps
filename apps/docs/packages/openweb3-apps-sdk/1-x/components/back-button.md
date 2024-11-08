# `BackButton`

Implements Openweb3 Mini Apps [Back Button](../../../../platform/back-button.md).

## Initialization

To initialize the component, use the `initBackButton` function:

```typescript
import { initBackButton } from '@openweb3-apps/sdk';

const [backButton] = initBackButton();  
```

## Showing and Hiding

To show and hide `BackButton`, it is required to use `show()` and `hide()` methods. These methods
update the button's `isVisible` property:

```typescript
backButton.show();
console.log(backButton.isVisible); // true  

backButton.hide();
console.log(backButton.isVisible); // false  
```  

## Events

List of events, which could be [tracked](#events):

| Event              | Listener                   | Triggered when                 |
|--------------------|----------------------------|--------------------------------|
| `click`            | `() => void`               | Back Button was clicked        |
| `change`           | `() => void`               | Something in component changed |
| `change:isVisible` | `(value: boolean) => void` | `isVisible` property changed   |

## Methods Support

List of methods, which could be used in [support checks](#methods-support): `show` and `hide`
