const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  webpack: {
    plugins: [
      // ...existing plugins
      new VanillaExtractPlugin({ outputCss: true }), // Add this line
    ],
  },
  module: {
    rules: [
      // ...existing rules
      {
        test: /\.css\.ts$/, // Match Vanilla Extract files
        include: /node_modules\/@vanilla-extract/, // Include Vanilla Extract files
        use: [
          {
            loader: require.resolve('babel-loader'),
          },
        ],
      },
    ],
  },
};