const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  babel: {
    plugins: ['@vanilla-extract/babel-plugin'],
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(new VanillaExtractPlugin());
      webpackConfig.resolve.symlinks = true;
      return webpackConfig;
    },
  },
};
