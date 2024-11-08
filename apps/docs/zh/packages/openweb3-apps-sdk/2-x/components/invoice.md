# 发票

负责
Openweb3 [invoices](https://core.openweb3.io/bots/payments#introducing-payments-2-0) 的💠[组件](./scopes.md)。

## 检查支持

要检查当前 Openweb3 迷你应用程序版本是否支持发票，需要使用
`isSupported` 方法：

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

## 开票

要打开发票，需要使用 `open` 方法。 这种方法允许使用发票的 URL 或 slug 打开发票
。

在 URL 模式下打开发票需要传递等于 `url` 的第二个参数，因此
方法会将传递的值解释为 URL。

调用该方法会更新 `isOpened` 信号属性值。

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
