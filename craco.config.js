const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  babel: {
    plugins: ["@vanilla-extract/babel-plugin"],
  },
  webpack: {
    configure: (webpackConfig) => {
      // 🔴 remove CRA's "outside src" restriction
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== "ModuleScopePlugin"
      );

      // add vanilla-extract plugin
      webpackConfig.plugins.push(new VanillaExtractPlugin());

      webpackConfig.resolve.symlinks = true;

      return webpackConfig;
    },
  },
};
