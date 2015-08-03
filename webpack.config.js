var webpack = require('webpack');
var path = require('path');

module.exports = {

	entry: './components/index',

	output: {
		library: 'ReactOwlCarousel',
		libraryTarget: 'umd',
		path: 'lib',
	},

	externals: [
		{
			"react": {
				root: "React",
				commonjs2: "react",
				commonjs: "react",
				amd: "react"
			}
		}
	],

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(process.cwd(), "components"),
				loader: 'babel?loose=all'
			},
			{
				test: /\.css$/,
				loader: "css-loader",
				include: path.resolve(process.cwd(), "components")
			},
		]
	},

	node : {
		Buffer: false
	},

	resolve: {
		extensions: ["", ".jsx", ".js"],
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	]

};
