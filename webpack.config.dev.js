var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var config = {
	devtool: 'eval',
	entry:  {
		app: [
			'eventsource-polyfill',
			'webpack-hot-middleware/client',
			'./example/index.jsx'
		],
	},
	resolve: {
		extensions: ["", ".jsx", ".js"],
		alias: {
			'react-owl-carousel': path.join(__dirname, 'components/OwlCarousel.jsx'),
			'react-owl-carousel/lib': path.join(__dirname, 'components'),
		},
	},
	output: {
		path: path.join(__dirname, 'example/public/'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel'],
				include: [path.join(__dirname, 'components'), path.join(__dirname, 'example'), path.join(__dirname, 'src')],
				exclude: path.join(__dirname, 'node_modules'),
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader',
					'postcss-loader',
				],
				include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')],
			},
		],
		noParse: [],
	},
	postcss: function () {
		return [autoprefixer];
	},
};

module.exports = config;
