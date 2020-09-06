const addChakraLoaderConfig = require('./helpers/add-chakra-loader-config');
const registerChakraVuePlugin = require('./helpers/register-chakra-vue-plugin');

module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      '@chakra-ui/vue': '^0.6.2',
      emotion: '^10.0.27',
    },
  });

  if (options.addChakraLoader) {
    api.extendPackage({
      devDependencies: {
        'chakra-loader': '^1.0.2',
      },
    });
  }

  api.injectImports(api.entryFile, `import Chakra from '@chakra-ui/vue'`);

  api.render('./template', {
    hasVueRouter: options.hasVueRouter,
    hasChakraLoader: options.addChakraLoader,
  });
  api.onCreateComplete(() => {
    registerChakraVuePlugin(api);

    if (options.addChakraLoader) {
      addChakraLoaderConfig(api);
    }
  });

  api.exitLog('Chakra UI Vue is ready');
  api.exitLog('Join the community on Discord - https://discord.gg/Tv8Jca');
};
