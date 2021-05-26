const webpack = require('webpack');
const { merge } = require('webpack-merge');

// plugins
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const webpackBaseConfig = require('./webpack.base.config');

const prodConfig = () => {
  return merge([
    {
      mode: 'production',
      optimization: {
        runtimeChunk: 'single',
        // splitChunks: {
        //   cacheGroups: {
        //     vendor: {
        //       test: /[\\/]node_modules[\\/]/,
        //       name: 'vendors',
        //       chunks: 'all',
        //     },
        //   },
        // },
        minimizer: [new TerserPlugin()],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin(),
        // new Visualizer({ filename: './statistics/statistics.html' }),
        new webpack.DefinePlugin({
          isDevelopment: false,
          'process.env': {
            NODE_ENV: JSON.stringify('production'),
          },
        }),
        new CompressionPlugin(),
      ],
    },
  ]);
};

module.exports = () => merge(webpackBaseConfig(), prodConfig());
