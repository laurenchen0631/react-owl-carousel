var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var minimize = process.argv.indexOf('--minimize') !== -1;

var config = {
	devtool: 'eval',
	entry:  {
		OwlCarousel: './components/OwlCarousel.jsx'
	},
	resolve: {
		extensions: ["", ".jsx", ".js"],
	},
	output: {
		path: path.join(__dirname, "lib"),
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
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loaders: ['babel'],
				include: [path.join(__dirname, 'components'), path.join(__dirname, 'src')],
				exclude: path.join(__dirname, 'node_modules'),
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader',
					'postcss-loader',
				],
				include: [path.join(__dirname, 'src')],
			},
		],

		noParse: [],
	},
	postcss: function () {
		return [autoprefixer];
	},
};

if (minimize) {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	);
	config.devtool = 'source-map';
	config.output.filename = "[name].min.js";
}

module.exports = config;
