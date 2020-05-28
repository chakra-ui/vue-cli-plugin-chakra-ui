module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      '@chakra-ui/vue': '^0.5.9',
      emotion: '^10.0.27',
    },
  });

  api.injectImports(api.entryFile, `import Chakra from '@chakra-ui/vue'`);

  api.render('./template', {
    hasVueRouter: options.hasVueRouter,
  });
  api.onCreateComplete(() => {
    let vueUseLine = `\n\nVue.use(Chakra)`;

    const fs = require('fs');

    let contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' });

    const lines = contentMain.split(/\r?\n/g).reverse();

    const lastImportIndex = lines.findIndex((line) => line.match(/^import/));

    lines[lastImportIndex] += vueUseLine;

    // modify app
    contentMain = lines.reverse().join('\n');

    fs.writeFileSync(api.entryFile, contentMain, { encoding: 'utf-8' });
  });

  api.exitLog('Chakra UI Vue is ready');
};
