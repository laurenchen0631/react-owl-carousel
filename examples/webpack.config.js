var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./examples/app.jsx'
	],
	output: {
		path: __dirname + '/examples',
		filename: "app.js",
		publicPath: '/'
	},

	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			loaders: ['react-hot', 'babel'],
			include: [
				path.resolve(process.cwd(), "components"),
				path.resolve(process.cwd(), "examples")
			],
		}]
	},

	resolve: {
		extensions: ["", ".jsx", ".js"],
		alias: {
			'react-owl-carousel': path.resolve(process.cwd(), "components"),
			'react-owl-carousel/lib': path.resolve(process.cwd(), "components")
		}
	},

	plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
};
