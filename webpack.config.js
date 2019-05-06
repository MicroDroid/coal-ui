const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	entry: [
		path.join(__dirname, 'src', 'coal.scss'),
	],

	mode: isProd ? 'production' : 'development',
	target: 'web',

	module: {
		rules: [
			{
				test: /\.css$/,
				loaders: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.scss$/,
				include: [/node_modules/, path.join(__dirname, 'src')],
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'coal.css'
		}),
		new WebpackOnBuildPlugin(() => {
			fs.unlinkSync(path.join('dist', 'main.js'));
		}),
	],

	...isProd ? {
		optimization: {
			minimizer: [
				new OptimizeCssAssetsPlugin(),
			]
		}
	} : {},
};