# Openweb3 Mini Apps Next.js Template

This template demonstrates how developers can implement a web application on the Openweb3
Mini Apps platform using the following technologies and libraries:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [@openweb3-apps SDK](https://docs.openweb3-mini-apps.com/packages/openweb3-apps-sdk)
- [Openweb3 UI](https://github.com/openweb3-io/Openweb3UI)

> The template was created using [pnpm](https://pnpm.io/). Therefore, it is required to use
> it for this project as well. Using other package managers, you will receive a corresponding error.

## Install Dependencies

If you have just cloned this template, you should install the project dependencies using the
command:

```Bash
pnpm install
```

## Scripts

This project contains the following scripts:

- `dev`. Runs the application in development mode.
- `dev:https`. Runs the application in development mode using self-signed SSL certificate.
- `build`. Builds the application for production.
- `start`. Starts the Next.js server in production mode.
- `lint`. Runs [eslint](https://eslint.org/) to ensure the code quality meets the required
  standards.

To run a script, use the `pnpm run` command:

```Bash
pnpm run {script}
# Example: pnpm run build
```

## Create Bot and Mini App

Before you start, make sure you have already created a Openweb3 Bot. Here is
a [comprehensive guide](https://docs.openweb3-mini-apps.com/platform/creating-new-app) on how to
do it.

## Run

Although Mini Apps are designed to be opened
within [Openweb3 applications](https://docs.openweb3-mini-apps.com/platform/about#supported-applications),
you can still develop and test them outside of Openweb3 during the development process.

To run the application in the development mode, use the `dev` script:

```bash
pnpm run dev
```

After this, you will see a similar message in your terminal:

```bash
▲ Next.js 14.2.3
- Local:        http://localhost:3000

✓ Starting...
✓ Ready in 2.9s
```

To view the application, you need to open the `Local`
link (`http://localhost:3000` in this example) in your browser.

It is important to note that some libraries in this template, such as `@openweb3-apps/sdk`, are not
intended for use outside of Openweb3.

Nevertheless, they appear to function properly. This is because the `src/hooks/useOpenweb3Mock.ts`
file, which is imported in the application's `Root` component, employs the `mockOpenweb3Env`
function to simulate the Openweb3 environment. This trick convinces the application that it is
running in a Openweb3-based environment. Therefore, be cautious not to use this function in
production mode unless you fully understand its implications.

### Run Inside Openweb3

Although it is possible to run the application outside of Openweb3, it is recommended to develop it
within Openweb3 for the most accurate representation of its real-world functionality.

To run the application inside Openweb3, [@BotFather](https://t.me/botfather) requires an HTTPS link.

This template already provides a solution.

To retrieve a link with the HTTPS protocol, consider using the `dev:https` script:

```bash
$ pnpm run dev:https

▲ Next.js 14.2.3
- Local:        https://localhost:3000

✓ Starting...
✓ Ready in 2.4s
```

Visiting the `Local` link (`https://localhost:3000` in this example) in your
browser, you will see the following warning:

![SSL Warning](assets/ssl-warning.png)

This browser warning is normal and can be safely ignored as long as the site is secure. Click
the `Proceed to localhost (unsafe)` button to continue and view the application.

Once the application is displayed correctly, submit this link as the Mini App link
to [@BotFather](https://t.me/botfather). Then, navigate
to [https://web.openweb3.io/k/](https://web.openweb3.io/k/), find your bot, and launch the
Openweb3 Mini App. This approach provides the full development experience.


## Deploy

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

## Useful Links

- [Platform documentation](https://docs.openweb3-mini-apps.com/)
- [@openweb3-apps/sdk-react documentation](https://docs.openweb3-mini-apps.com/packages/openweb3-apps-sdk-react)
- [Openweb3 developers community chat](https://openweb3.io/devs)