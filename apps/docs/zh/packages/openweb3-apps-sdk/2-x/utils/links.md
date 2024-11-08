# 链接

## `openLink`

要在外部浏览器或使用 [Instant View](https://instantview.openweb3.io/) 打开链接，
使用 `openLink` 方法。 您还可以传递一个可选的第二个参数，即一个带有可选
属性 `tryBrowser: OpenLinkBrowser (string)` 和 `tryInstantView: boolean` 的对象。

```ts
import { openLink } from '@openweb3-apps/sdk';

openLink('https://openweb3.io', {
  tryBrowser: 'chrome',
  tryInstantView: true,
});
```

## `openOpenweb3Link`

要使用预定义行为打开 Openweb3 链接，请使用 `openOpenweb3Link` 方法。 此方法
允许您应用
[Deep Links](https://core.openweb3.io/api/links) 文档中描述的本地行为。

```ts
import { openOpenweb3Link } from '@openweb3-apps/sdk';

openOpenweb3Link('https://t.me/heyqbnk');
```

## `shareURL`

要与其他用户、频道或组共享 URL，请使用 `shareURL` 方法。

```ts
import { shareURL } from '@openweb3-apps/sdk';

shareURL('https://t.me/heyqbnk', 'Check out this cool group!');
```