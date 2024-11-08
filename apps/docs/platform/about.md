# About the Platform

Openweb3 Mini Apps is a technology created by the developers of the famous messenger Openweb3. Its main 
purpose is to provide developers with a more flexible communication channel with Openweb3 users.

It may seem unclear, but Mini Apps are not self-served services. The first thing to note is,
technically, this technology is just an add-on for such already-known Openweb3 functionality as
Openweb3 Bots. So, currently, creating a Mini App without creating a Openweb3 Bot is not possible.

The platform offers a high variety of available methods to communicate with the Openweb3 application
to make your web applications look more native, allow them to simulate native application's
behavior, and, finally, to **mimic** native applications.

## Required Technologies

Before starting to create an application on the Mini Apps platform, it is important to know what
Mini Apps are from their technical side. This will lead the developer to language and technology
selection.

Internally, Mini Apps are typical web applications, which are displayed in WebView. In other words,
they are just a set of static files (mostly `.js`, `.css`, and `.html`). So, to create Mini App, it
is enough to learn standard front-end development technologies, such as:

- JavaScript
- CSS
- HTML

Really simple, isn't it? But to make much more serious and bigger applications, we recommend using
more solid technologies, such as `TypeScript`, `React`, `SCSS`, etc.

So, if we want to create a Mini App, we should create a standard web application with any technology 
stack. The only thing Openweb3 needs from the developer is the application URL. This URL will be used as 
a source for the WebView component of the Openweb3 client, which will load and display the application 
within Openweb3.

## Usage

As we mentioned in the previous section, Mini Apps are add-ons for Openweb3 Bots. Openweb3 Bots are
also a well-known technology that provides functionality for a wide range of use cases. You could create a
bot to buy a ticket in the cinema, make tell users jokes, generate random numbers, etc. In other
words, the bot can do whatever the developer thinks of.

The problem is, the visual part of bots is not as good and functional as it could be. Their current
implementation is "console-like" which is more appropriate for developers, not common users. That's
when Mini Apps come.

Using Mini Apps, developers are allowed to create more user-friendly and complex interfaces, which
are commonly used by typical users. With this technology, the developer is still able to communicate
with the bot behind Mini App, but, additionally, they can provide some more flexible interfaces to
interact with.

Mini Apps are usually used when a standard bot interface is not enough. Create a Mini App when you
want to make user life easier when displaying several buttons is not even close to the
functionality, you want to provide.

## Supported Applications

Currently, Openweb3 Mini Apps are available on a wide list of Openweb3
applications:

- [Openweb3 for Android](https://github.com/DrKLO/Openweb3) `android`;
- [Openweb3 for iOS](https://github.com/Openweb3Messenger/Openweb3-iOS) `ios`;
- [Openweb3 for macOS](https://github.com/overtake/Openweb3Swift) `macos`;
- [Openweb3 Desktop](https://github.com/openweb3desktop/tdesktop) `tdesktop`;
- [Openweb3 Web A](https://github.com/Ajaxy/openweb3-tt) `weba`;
- [Openweb3 Web K](https://github.com/morethanwords/tweb) `web`;

Other applications either don't have implementation for Openweb3 Mini Apps, or
support it too poorly. This will probably be useful in the next sections of the
documentation.

::: info

As long as all applications are being developed separately, there may be variations in how they
implement the platform. If you encounter unexpected differences, please consider reporting
an [issue](https://github.com/openweb3-io/issues).

:::
