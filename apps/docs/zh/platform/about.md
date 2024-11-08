# 关于平台

Openweb3 Mini Apps 是著名聊天工具 Openweb3 开发人员创造的一项技术。
的主要目的是为开发人员与 Openweb3 用户提供更灵活的交流渠道。

这似乎不太清楚，但迷你应用程序不是自助服务。 首先要注意的是，从技术上讲，这项技术只是对
Openweb3 Bots 等已知 Openweb3 功能的附加。 因此，目前无法在不创建 Openweb3 Bot 的情况下创建迷你应用程序。

该平台提供了与 Openweb3 应用程序
通信的多种可用方法，使您的网络应用程序看起来更像原生应用程序，允许它们模拟原生应用程序的
行为，并最终**模仿**原生应用程序。

## 所需技术

在开始在迷你应用程序平台上创建应用程序之前，有必要从技术方面了解一下
迷你应用程序是什么。 这将引导开发人员选择语言和技术
。

在内部，迷你应用程序是典型的网络应用程序，在 WebView 中显示。 换句话说，它们只是一组静态文件（主要是`.js`、`.css`和`.html`）。 因此，要创建 Mini App，只需学习标准的前端开发技术即可，例如：

- JavaScript
- CSS
- 超文本标记语言

真的很简单，不是吗？ 但如果要制作更严肃、更大型的应用程序，我们建议使用
等更可靠的技术，如 `TypeScript`、`React`、`SCSS` 等。

因此，如果我们想创建一个迷你应用程序，就应该使用任何技术创建一个标准的网络应用程序
stack。 Openweb3 需要开发者提供的唯一信息就是应用程序的 URL。 该 URL 将用作 Openweb3 客户端 WebView 组件的
源，WebView 组件将加载并显示 Openweb3 中的应用程序
。

## 使用方法

正如我们在上一节中提到的，迷你应用程序是 Openweb3 机器人的附加组件。 Openweb3 机器人是
也是一项著名的技术，可为各种使用案例提供功能。 您可以创建一个
机器人来购买电影票、给用户讲笑话、生成随机数等。 换句话说，机器人可以做开发人员想到的任何事情。

问题是，机器人的视觉效果和功能都不尽如人意。 他们目前的
实现是 "控制台式 "的，更适合开发人员，而不是普通用户。 当迷你应用程序出现时，
。

利用迷你应用程序，开发人员可以创建更加友好和复杂的界面，这些界面是普通用户常用的。 有了这项技术，开发者仍然可以与 Mini App 背后的机器人
通信，但此外，他们还可以提供一些更灵活的界面，供
交互。

当标准机器人界面不够用时，通常会使用迷你应用程序。 当
想让用户的生活更轻松时，如果显示几个按钮与
想要提供的功能相差甚远，就可以创建一个迷你应用程序。

## 支持的应用程序

Openweb3 Mini Apps 可在众多 Openweb3
应用程序中使用：

- [Openweb3 for Android](https://github.com/DrKLO/Openweb3) `android`；
- [Openweb3 for iOS](https://github.com/Openweb3Messenger/Openweb3-iOS) `iS`；
- [Openweb3 for macOS](https://github.com/overtake/Openweb3Swift) `macos`；
- [Openweb3 Desktop](https://github.com/openweb3desktop/tdesktop) `tdesktop`；
- [Openweb3 Web A](https://github.com/Ajaxy/openweb3-tt) `weba`；
- [Openweb3 Web K](https://github.com/morethanwords/tweb) `web`；

其他应用程序要么没有实现 Openweb3 迷你应用程序，要么
对它的支持太差。 这在
文档的后续章节中可能会有用。

::: info

只要所有应用程序都是单独开发的，那么它们在
实现平台的方式就可能存在差异。 如果遇到意外差异，请考虑
[报告问题](https://github.com/openweb3-io/issues)。

:::
