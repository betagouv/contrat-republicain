/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot|svg)$/,
      loader: "file-loader",
      options: {
        esModule: false,
        name: "[name].[ext]",
        outputPath: "static/fonts/",
        publicPath: "../fonts/",
      },
    });

    return config;
  },
}
