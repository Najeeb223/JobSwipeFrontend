module.exports = {
  presets: [
    '@babel/preset-env',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'), // Use require.resolve
      {
        root: ['./src'],
        alias: {
          screens: './src/screens',
        },
      },
    ],
  ],
};
