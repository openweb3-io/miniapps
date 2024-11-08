# @openweb3-apps/create-mini-app

<p style="display: inline-flex; gap: 8px">
  <a href="https://npmjs.com/package/@openweb3-apps/create-mini-app">
    <img src="https://img.shields.io/npm/v/@openweb3-apps/create-mini-app?logo=npm"/>
  </a>
  <a href="https://github.com/openweb3-io/miniapps/tree/master/packages/create-mini-app">
    <img src="https://img.shields.io/badge/source-black?logo=github"/>
  </a>
</p>

`@openweb3-apps/create-mini-app` is a CLI tool designed to scaffold your new
mini application on the Openweb3 Mini Apps platform. It generates a project with pre-configured libraries and template files, 
allowing you to customize the content based on your specific requirements.

## Usage

To run the tool, use one of the following scripts depending on your package manager.

::: code-group
```bash [pnpm]
pnpm dlx @openweb3-apps/create-mini-app@latest
```

```bash [npm]
npx @openweb3-apps/create-mini-app@latest
```

```bash [yarn]
yarn create @openweb3-apps/mini-app
```
:::

## Creating a New Application

The above command executes a script that guides you through the creation of
your application by sequentially prompting for the following information:

### 1. Project Directory Name

- 	**Prompt**: Enter the name of the folder where the project files will be located.

-	**Default**: mini-app
     The script will create a subfolder with the specified name in the current directory.

### 2.	Preferred Technologies

| Option         | Details                                                                                                                                                                                                                                                                                                                                 |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Language**   | Choose between **TypeScript** or **JavaScript**.                                                                                                                                                                                                                                                                                        |
| **SDK**        | **• tma.js** [@openweb3-apps/sdk](https://www.npmjs.com/package/@openweb3-apps/sdk) <br/>A TypeScript library for seamless communication with Openweb3 Mini Apps functionality. <br/> **• Openweb3 SDK** [@twa-dev/sdk](https://www.npmjs.com/package/@twa-dev/sdk)<br/>This package allows you to work with the SDK as an npm package. |
| **Frameworks** | **• React.js** [template](https://github.com/openweb3-io/reactjs-template)<br/> **• Next.js** [template](https://github.com/openweb3-io/nextjs-template)<br/> **• Solid.js** [template](https://github.com/openweb3-io/solidjs-js-template)<br/>                                                                   |

### 3.	Git Remote Repository URL (Optional)

Enter the Git remote repository URL. This value will be used to connect the created project with your
remote Git repository. It should be either an HTTPS link or an SSH connection string.

## Build Configuration

Projects created with `create-mini-app` are configured to use the [Vite](https://vite.dev/) bundler. The project includes a `vite.config.js` file,
which you can customize to adjust the build settings according to your needs.
