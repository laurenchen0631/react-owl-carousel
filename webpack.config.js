var path = require('path');
var webpack = require('webpack');

var config = {
	devtool: 'inline-source-map',
	entry:  [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./example/index.jsx'
	],
	resolve: {
		extensions: [".jsx", ".js"],
		alias: {
			'react-owl-carousel': path.resolve(__dirname, 'components/OwlCarousel.jsx'),
			'react-owl-carousel/lib': path.resolve(__dirname, 'components'),
		},
	},
	output: {
		path: path.join(__dirname, 'example/public/'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally

		new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates

		new webpack.NoEmitOnErrorsPlugin(),
		// do not emit compiled assets that include errors

		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery",
			"window.jQuery": "jquery"
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				use: [
					'babel-loader',
				],
				exclude: /node_modules/,
				include: [path.join(__dirname, 'components'), path.join(__dirname, 'example')],
			},
			{
				test: /\.css$/, 
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.png$/, 
				use: 'file-loader',
			},
		],
	},

	devServer: {
		host: 'localhost',
		port: 3000,

		historyApiFallback: true,
		// respond to 404s with index.html

		hot: true,
		// enable HMR on the server
	},
};

module.exports = config;
