[code-badge]: https://img.shields.io/badge/source-black?logo=github

# @openweb3-apps

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Mono-repository, containing all the packages, connected with comfortable and safe TypeScript
development on Openweb3 Mini Apps platform.

## Getting Started

A great starting point for learning about the platform is the community-built [documentation](https://docs.openweb3-mini-apps.com). 
Additionally, the official Openweb3 [platform documentation](https://core.openweb3.org/bots/webapps) can 
provide valuable insights and a different perspective on the platform.

Before diving into development, it’s also advisable to explore the available 
[libraries](https://docs.openweb3-mini-apps.com/packages/openweb3-apps-create-mini-app) for 
both client-side and backend development to gain a better understanding of the tools at your
disposal.

> [!WARNING]
> Working with `@openweb3-apps` packages, you <ins>**must not**</ins> use the Openweb3 library - `openweb3-web-app.js`.
> Using both `@openweb3-apps` packages and `openweb3-web-app.js` will surely lead to bugs.

## Why not Openweb3 SDK

Why bother creating a project like `@openweb3-apps` when there are existing solutions from the developers
who own the platform? The answer is rather simple: the currently provided solution (SDK) does not
seem to meet the required minimum quality standards. Of course, the term 'quality' is rather
specific and subjective, but this section should make it more objective.

This project was born during the research of a solution provided by
Openweb3 - [openweb3-web-app.js](https://openweb3.org/js/openweb3-web-app.js), which is considered
the only existing official SDK for Openweb3 Mini Apps by Openweb3. Therefore, all the points
described in this section will be related to this package.

Because of the large section size, the complete motivation description has been moved to a [separate
document](./MOTIVATION.md).

## Contribution

Any contribution is appreciated. To start contributing, please, follow
the [Contribution Guidelines](./CONTRIBUTING.md).
