# Invoice

The 💠[component](../scopes.md) responsible for the
Openweb3 [invoices](https://core.openweb3.org/bots/payments#introducing-payments-2-0).

## Checking Support

To check if invoices are supported by the current Openweb3 Mini Apps version, the
`isSupported` method is used:

::: code-group

```ts [Variable]
import { invoice } from '@openweb3-apps/sdk';

invoice.isSupported(); // boolean
```

```ts [Functions]
import { isInvoiceSupported } from '@openweb3-apps/sdk';

isInvoiceSupported(); // boolean
```

:::

## Opening

To open an invoice, it is required to use the `open` method. This method allows opening invoices
using their URLs or slugs.

Opening an invoice in URL mode requires passing the second argument equal to `url`, so the method
will interpret the passed value as a URL.

Calling the method updates the `isOpened` signal property value.

::: code-group

```ts [Variable]
import { invoice } from '@openweb3-apps/sdk';

invoice.isOpened(); // false
const promise = invoice.open('abIIks213');
invoice.isOpened(); // true
const status = await promise;
invoice.isOpened(); // false

// Or in URL mode:
await invoice.open('https://t.me/invoice/abIIks213', 'url');
```

```ts [Functions]
import { openInvoice, isInvoiceOpened } from '@openweb3-apps/sdk';

isInvoiceOpened(); // false
const promise = openInvoice('abIIks213');
isInvoiceOpened(); // true
const status = await promise;
isInvoiceOpened(); // false

// Or in URL mode:
await openInvoice('https://t.me/invoice/abIIks213', 'url');
```

:::
