const path = require('path');

/** @type{import("@storybook/react-webpack5").StorybookConfig} */
export default {
  stories: [
    '../app/src/components/stories/**/*.stories.mdx',
    '../app/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '../preset.js',
      options: {
        modulesToTranspile: [
          'react-native-reanimated',
          'react-native-vector-icons',
          'nativewind',
          'react-native-css-interop',
        ],
        babelPresets: ['nativewind/babel'],
        babelPresetReactOptions: { jsxImportSource: 'nativewind' },
        babelPlugins: [
          '@babel/plugin-proposal-export-namespace-from',
          'react-native-reanimated/plugin',
        ],
      },
    },
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // speeds up storybook build time
      allowSyntheticDefaultImports: false,
      // speeds up storybook build time
      esModuleInterop: false,
      // makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
        'babel-loader',
      ],
      include: [
        path.resolve(__dirname, '../app/src/components/stories/nativewind'),
        path.resolve(__dirname, './'),
      ],
    });
  

    return {
      ...config,
    };
  },
};