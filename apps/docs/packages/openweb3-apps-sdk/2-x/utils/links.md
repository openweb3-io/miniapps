# Links

## `openLink`

To open a link in an external browser or using [Instant View](https://instantview.openweb3.org/),
use the `openLink` method. You can also pass an optional second argument, an object with optional
properties `tryBrowser: OpenLinkBrowser (string)` and `tryInstantView: boolean`.

```ts
import { openLink } from '@openweb3-apps/sdk';

openLink('https://openweb3.org', {
  tryBrowser: 'chrome',
  tryInstantView: true,
});
```

## `openOpenweb3Link`

To open a Openweb3 link with predefined behavior, use the `openOpenweb3Link` method. This method
allows you to apply the native behavior as described in
the [Deep Links](https://core.openweb3.org/api/links) documentation.

```ts
import { openOpenweb3Link } from '@openweb3-apps/sdk';

openOpenweb3Link('https://t.me/heyqbnk');
```

## `shareURL`

To share a URL with another user, channel, or group, use the `shareURL` method.

```ts
import { shareURL } from '@openweb3-apps/sdk';

shareURL('https://t.me/heyqbnk', 'Check out this cool group!');
```