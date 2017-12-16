var path = require('path');
var webpack = require('webpack');

var config = {
	devtool: 'eval',
	entry:  {
		OwlCarousel: './components/OwlCarousel.jsx'
	},
	resolve: {
		extensions: [".jsx", ".js"],
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js",
		library: ["react-owl-carousel"],
		libraryTarget: "umd"
	},
	externals: [
		{
			'react': {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react'
			}
		},
		{
			'react-dom': {
				root: 'ReactDOM',
				commonjs2: 'react-dom',
				commonjs: 'react-dom',
				amd: 'react-dom'
			}
		},
	],
	plugins: [
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
				include: [path.join(__dirname, 'components'), path.join(__dirname, 'example'),path.join(__dirname, 'lib')],
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
};

module.exports = function(env) {

	if (env && env.minimize) {
		config.plugins.push(
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: true,
				comments: false
			})
		);
		config.devtool = 'source-map';
		config.output.filename = "[name].min.js";
	}
	
	return config;
}
