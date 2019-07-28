/**
 * This will be the Babel config for the full project. It has
 * the highest precedence. This is a Babel 7 feature.
 *
 * @see: https://babeljs.io/docs/en/next/babelconfigjs
 *
 * We use the environment config below to call out env sepcific
 * config changes to our Babel setup. Env -specific configs override
 * the non-env configs, and so others don't have to be duplicated.
 *
 * @see: https://babeljs.io/docs/en/next/babelconfigjs#environment
 */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // debug: process.env.NODE_ENV !== 'production',
        modules: false,
        // useBuiltIns: 'usage',
        // corejs: 3,
        shippedProposals: true,
      },
    ],
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    'emotion',
    'babel-plugin-macros',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          'projectRoot': __dirname,
          '@sb-storybook-components': './__storybook__/components',
        },
      },
    ],
  ],
  env: {
    development: {
      plugins: [['emotion', { sourceMap: true, autoLabel: true }]],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@emotion/babel-preset-css-prop',
      ],
    },
  },
};
