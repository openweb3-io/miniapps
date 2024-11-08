---
outline: [2, 3]
---

# 迷你应用程序

该组件提供其他系统
组件未涵盖的 Openweb3 Mini Apps 通用功能。

## 初始化

要初始化组件，请使用`initMiniApp`函数：

```typescript
import { initMiniApp } from '@openweb3-apps/sdk';

const [miniApp] = initMiniApp();  
```

## 颜色

### 页眉

开发人员可以获取并更新 Mini App 的标题和背景颜色。 要获取
标题颜色的当前值，开发人员可参考 `headerColor` 属性，并通过
`setHeaderColor` 方法进行更新：

```typescript
miniApp.setHeaderColor('secondary_bg_color');
// or starting from v6.10:
miniApp.setHeaderColor('#aa1132');
```

### 背景介绍

除了迷你应用程序的标题颜色，开发人员还可以调整其背景颜色：

```typescript
miniApp.setBgColor('#888311');
```

迷你应用背景色用于确定当前迷你应用是否为深色调。 要知道
当前调色板是否为暗色，开发人员应使用 `isDark` 属性：

```typescript
console.log(miniApp.isDark); // false
```

## 访问请求

从 Openweb3 Mini Apps 6.9 版本开始，允许 Mini Apps 申请访问手机
号码和申请写入当前用户的权限。 为此，允许开发人员使用
`requestPhoneAccess` 和 `requestWriteAccess` 方法：

```typescript
miniApp.requestPhoneAccess().then(() => {
  // done.
});

miniApp.requestWriteAccess().then(() => {
  // done.
});
```

要请求联系信息（例如电话号码），请使用 `requestContact`
方法：

```typescript
miniApp.requestContact().then(contact => {
  console.log(contact);
  // Output:
  // {
  //   authDate: Date(...),
  //   hash: '...',
  //   contact: {
  //     firstName: '...',
  //     phoneNumber: '+38291789233',
  //   },
  // };
});
```

## 内联模式

迷你应用程序可在 [内联模式](https://core.openweb3.io/bots/inline) 下启动。 当
在这种模式下启动迷你应用程序时，允许开发人员使用 `switchInlineQuery`
方法：

```typescript
miniApp.switchInlineQuery('Show me something', ['users', 'groups']);
```

调用此方法时，Openweb3 应用程序会发送机器人用户名和指定文本，以
用户选择的聊天内容。 可用聊天列表将受到第二个参数中指定的聊天类型
的限制。

要检查当前 Mini App 是否以内联模式启动，开发者应参考
`isBotInline` 属性：

```typescript
console.log(miniApp.isBotInline); // false
```

## 生命周期方法

### `ready`

通知 Openweb3 应用程序已准备好显示迷你应用程序。

建议尽早调用该方法，即在加载所有基本接口
元素后立即调用。 调用该方法后，加载占位符将被隐藏，迷你应用程序将显示出来。

如果该方法未被调用，占位符只有在页面完全加载后才会被隐藏。

```typescript
miniApp.ready();
```

### `close`

关闭迷你应用程序。

```typescript
miniApp.close();
```

如果您想将应用程序打包到底部应用程序栏，但不想关闭它，请考虑使用第一个参数 `returnBack: boolean`。

```ts
//
miniApp.close(true);
```

## 其他方法

### `sendData`

用于向机器人发送数据的方法。 调用该方法时，会向
机器人发送一条服务消息，其中包含长度不超过 4096 字节的数据，然后关闭 Mini App。 请参阅
[Message](https://core.openweb3.io/bots/api#message) 类中的 `web_app_data` 字段。

## 事件

可被 [跟踪](#events) 的事件列表：

| 事件                             | 监听器                                                            | 触发条件                 |
| ------------------------------ | ------------------------------------------------------------- | -------------------- |
| `change`                             | `() => void`                                                  | 组件中的某些部分发生了变化        |
| `change:bgColor`     | `(value: RGB) => void`     | 更改了 `bgColor` 属性     |
| `change:headerColor` | `(value: HeaderColorKey or RGB) => void` | 更改了 `headerColor` 属性 |

## 方法支持 {#methods-support}

方法和参数列表，可在
[support checks](../components.md#methods-support) 中使用：`requestWriteAccess`、`requestPhoneAccess`、 
`switchInlineQuery`、`setHeaderColor`、`setBgColor`和`setHeaderColor.color`。
