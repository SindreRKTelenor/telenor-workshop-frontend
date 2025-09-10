# vue-project


## Installation of required programs:
### Node:
To start this project you need to have [Node.js](https://nodejs.org/) installed. We are using the latest version of node.

We recommend using [nvm](https://github.com/nvm-sh/nvm) if you are on max/linux:
#### Install nvm:
How to Install NVM on Linux and Mac. 
Since Linux and Mac have some similarities (they are both UNIX-based OSes), you can install nvm on them in similar ways.

1. Run the nvm installer
   In your terminal, run the nvm installer like this:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
or
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
You can use curl or bash depending on the command available on your device.

These commands will clone the nvm repository to a ```~/.nvm``` directory on your device.

2. Update your profile configuration
   The installation process from step 1 should also automatically add the nvm configuration to your profile. If you're using zsh, that would be ```~/.zshrc```. If you're using bash, that would be ```~/.bash_profile```...or some other profile.

If it doesn't automatically add nvm configuration, you can add it yourself to your profile file:
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
This command above loads nvm for use.

3. Reload the shell configuration
   With your profile configuration updated, now you will reload the configuration for your terminal to use:
```
source ~/.bashrc
```
With this command executed, nvm is ready for you to use. You can confirm that nvm is installed correctly by running:
```
nvm -v
```
This should show the version of nvm installed.

##### Wrapping up
With nvm installed, you can now install, uninstall, and switch between different Node versions in your Windows, Linux, or Mac device.

##### You can install Node versions like this:
- This command will install the last version of Node:
```
nvm install latest
```

- This will install the X.Y.Z Node version.
```
nvm install vX.Y.Z
```
- And if you want to use a specific version at any point, you can run the following in your terminal:
```
nvm use vA.B.C
```

## Docs related to Vue3 + Pinia + Vue Router + Typescript + ESLint + Prettier:
- [Vue3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
