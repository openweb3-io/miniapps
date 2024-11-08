# 环境

此软件包只能在 Openweb3 应用程序中使用。 由于非 Openweb3
环境缺乏 Openweb3 特有的特性，调用
[retrieveLaunchParams](launch-parameters.md#retrieving)
或 [postEvent](methods-and-events.md#postevent) 等方法会导致错误。

不过，该软件包提供了 `mockOpenweb3Env` 函数，用于模仿 Openweb3 提供的环境
。 它可以帮助开发人员在 BotFather 中创建迷你
应用程序记录，甚至无需创建记录即可开始开发应用程序。

该函数接受原始或解析格式的发射参数。 下面就是一个例子：

```ts
import { mockOpenweb3Env, parseInitData } from '@openweb3-apps/sdk';

const initDataRaw = new URLSearchParams([
  ['user', JSON.stringify({
    id: 99281932,
    first_name: 'Andrew',
    last_name: 'Rogue',
    username: 'rogue',
    language_code: 'en',
    is_premium: true,
    allows_write_to_pm: true,
  })],
  ['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
  ['auth_date', '1716922846'],
  ['start_param', 'debug'],
  ['chat_type', 'sender'],
  ['chat_instance', '8428209589180549439'],
]).toString();

mockOpenweb3Env({
  themeParams: {
    accentTextColor: '#6ab2f2',
    bgColor: '#17212b',
    buttonColor: '#5288c1',
    buttonTextColor: '#ffffff',
    destructiveTextColor: '#ec3942',
    headerBgColor: '#17212b',
    hintColor: '#708499',
    linkColor: '#6ab3f3',
    secondaryBgColor: '#232e3c',
    sectionBgColor: '#17212b',
    sectionHeaderTextColor: '#6ab3f3',
    subtitleTextColor: '#708499',
    textColor: '#f5f5f5',
  },
  initData: parseInitData(initDataRaw),
  initDataRaw,
  version: '7.2',
  platform: 'tdesktop',
});
```

:::warning
请注意，此功能只能模仿 Openweb3 环境行为。 它不会发送任何真正的
请求，也不会执行只能在 Openweb3 应用程序中看到的操作。
:::
