module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          media: './src/media',
          store: './src/store',
          routes: './src/routes',
          screens: './src/screens',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
  ],
};
