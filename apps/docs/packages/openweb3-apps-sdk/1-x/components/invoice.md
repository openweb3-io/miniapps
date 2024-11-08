# `Invoice`

Implements Openweb3 [invoices](https://core.openweb3.org/bots/payments#introducing-payments-2-0)
functionality.

## Initialization

To initialize the component, use the `initInvoice` function:

```typescript
import { initInvoice } from '@openweb3-apps/sdk';

const invoice = initInvoice();  
```

## Opening Invoice

To open an invoice, it is required to use the `open` method. This method allows opening invoices
using their URLs or slugs.

Opening an invoice in URL mode requires passing the second argument equal to `url`, so the method
will interpret the passed value as a URL.

To interpret the passed value as a slug, omit the second argument.

::: code-group

```typescript [Using slug]
invoice
  .open('abIIks213')
  .then((status) => {
    // Output: 'paid'
    return console.log(status);
  });
```

```typescript [Using URL]
invoice
  .open('https://t.me/invoice/abIIks213', 'url')
  .then((status) => {
    // Output: 'paid'
    return console.log(status);
  });
```

:::

::: info

Note that slug is a part of the string which is placed after the `$` symbol. So, having the `$abcdefghi` value returned from Openweb3 Bot API, you must call the `open` method using the `abcdefghi` value, or a complete URL (https://t.me/invoice/abcdefghi or https://t.me/$abcdefghi).

:::

## Events

List of events, which could be [tracked](#events):

| Event             | Listener                   | Triggered when                 |
|-------------------|----------------------------|--------------------------------|
| `change`          | `() => void`               | Something in component changed |
| `change:isOpened` | `(value: boolean) => void` | `isOpened` property changed    |

## Methods Support

List of methods, which could be used in [support checks](#methods-support): `open`
