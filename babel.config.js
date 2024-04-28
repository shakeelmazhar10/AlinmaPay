module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app': './app/src',
          '@components': './app/src/components',
          '@screens': './app/src/screens',
          '@navigation': './app/src/navigation',
          '@redux': './app/src/redux',
          '@hooks': './app/src/hooks',
          '@context': './app/src/context',
          '@assets': './app/src/assets',
          '@api': './app/src/api',
          '@services': './app/src/services',
          '@i18n': './app/src/i18n',
          '@theme': './app/src/theme',
          '@utils': './app/src/utils'
        }
      }
    ]
  ]
};
