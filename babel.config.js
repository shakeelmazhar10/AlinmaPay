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
          '@store': './app/src/store',
          '@hooks': './app/src/hooks',
          '@context': './app/src/context',
          '@assets': './app/src/assets',
          '@api': './app/src/api',
          '@network': './app/src/network',
          '@localization': './app/src/localization',
          '@theme': './app/src/theme',
          '@utils': './app/src/utils'
        }
      }
    ]
  ]
}
