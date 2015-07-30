'use strict';

var gulp   = require('gulp');
var gutil  = require('gulp-util');
var del    = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var devConfig = require('./examples/webpack.config');

gulp.task('default', ['server']);

gulp.task('clean', function(cb){
	del('lib/*', cb);
});

gulp.task("release", ['clean', 'dev', 'prod']);

gulp.task('dev', function(cb){
	config.output.filename = 'ReactOwlCarousel.js';
	config.plugins = [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	];

	webpack(config, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			// output options
		}));
		cb();
	});
});

gulp.task('prod', function(cb){
	config.output.filename = 'ReactOwlCarousel.min.js';
	config.plugins = [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	];

	webpack(config, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			// output options
		}));
		cb();
	});
});

gulp.task("server", function(callback) {
	devConfig.plugins = [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	];

	new WebpackDevServer(webpack(devConfig), {
		contentBase : 'examples',
		publicPath : config.output.publicPath,
		hot : true,
		noInfo: true, // display no info to console (only warnings and errors)
		historyApiFallback : true,
		stats : { colors: true },
	})
	.listen(3000, 'localhost', function (err) {
		if (err) {
			gutil.log(gutil.colors.red('[Webpack-Dev-Server] Error'), err.toString());
		}
		gutil.log(gutil.colors.green('[Webpack-Dev-Server]'), 'Running on http://localhost:3000/');
		//callback();
	});
});

gulp.task("example", function(callback) {
	devConfig.entry = './examples/app.jsx';
	devConfig.output = {
		filename: "app.min.js",
		path: 'examples',
	};
	devConfig.module.loaders[0].loaders = ['babel?loose=all'];
	devConfig.plugins = [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	];

	webpack(devConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			// output options
		}));
		callback();
	});
});

gulp.task("test", function(callback) {

});
