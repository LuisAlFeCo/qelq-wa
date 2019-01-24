
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/****************************************************************************************/

var serverConfig = {
	node: {
		__filename: true,
		__dirname: false
	},
	target: 'node',

	entry: {
		'index.js': './src/server/index.js',
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]'
	},

	module: {
		rules: [
			{
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/server/config.json', to: 'config.json' },
		])
	]
};

/****************************************************************************************/

var clientConfig = {
	target: 'web',

	entry: {
		qelq: './src/client/app/app.js',
	},

	output: {
		path: path.join(__dirname, 'dist', 'assets'),
		filename: 'js/[name].min.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: 'css-loader'
					}, {
						loader: 'sass-loader'
					}]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'css/[name].min.css'
		}),
		new CopyWebpackPlugin([
			{ from: './resources/images', to: 'images' }
		])
	]
};

/****************************************************************************************/

module.exports = [ serverConfig, clientConfig ];

/****************************************************************************************/
