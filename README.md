# vue-cli-plugin-chakra-ui

>This plugin setups Chakra UI Vue in your Vue CLI generated project.

## Install Vue CLI 3
If you haven't yet installed vue-cli 3, install it like so:

```
npm install -g @vue/cli
```

or 

```
yarn global add @vue/cli
```

>If you still need the legacy `vue init` functionality, you can install a global bridge by following the instructions [here](https://cli.vuejs.org/guide/creating-a-project.html#pulling-2-x-templates-legacy)

Generate a project using vue-cli 3.0:

```vue create my-app```

Before installing the chakra-ui plugin, make sure to commit or stash your changes in case you need to revert the changes.

## Usage
To install the chakra-ui plugin simply navigate to your application's folder and add chakra-ui.

```
vue add chakra-ui
```

The plugin would install [`@chakra-ui/vue`](https://vue.chakra-ui.com) and it's peer dependency - [Emotion](https://emotion.sh)

It would also touch `main.js` and `App.vue` to set up your project for consumption of Chakra UI components.