const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      'babel-plugin-module-resolver': path.resolve(__dirname, 'node_modules/babel-plugin-module-resolver'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};