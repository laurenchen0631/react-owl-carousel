var webpack = require('webpack');

module.exports = function (config) {
	config.set({

		browserNoActivityTimeout: 30000,

		browsers: [ 'PhantomJS' ],

		singleRun: false,

		frameworks: [ 'mocha' ],

		files: [
			'test.webpack.js'
		],

		preprocessors: {
			'test.webpack.js': [ 'webpack', 'sourcemap' ]
		},

		reporters: [ 'dots' ],

		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{
						test: /\.(js|jsx)$/,
						exclude: /node_modules/,
						loader: 'babel'
					}
				]
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify('test')
				})
			]
		},

		webpackServer: {
			noInfo: true
		}

	});
};
