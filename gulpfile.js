// reference
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md

var gulp   = require('gulp');
var gutil  = require('gulp-util');
var del    = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var devConfig = require('./examples/webpack.config');

// so you can run `gulp js` to build the file
// gulp.task('js', bundleGenerator('./example/app.jsx','./example',  'app', true));
// gulp.task('js:nowatch', bundleGenerator('./example/app.jsx', './example', 'app', false));
// gulp.task('js:release', bundleGenerator('./components/index.js', './lib', 'index', false));

gulp.task('default', ['server']);

gulp.task('clean', function(cb){
	del('lib/*', cb);
});

gulp.task("build", ['dev','prod']);

gulp.task('dev', function(cb){

});

gulp.task('prod', function(cb){
	
});

gulp.task("server", function(callback) {
	new WebpackDevServer(webpack(devConfig), {
		contentBase : 'examples',
		publicPath : config.output.publicPath,
		hot : true,
		// noInfo: true, // display no info to console (only warnings and errors)
		historyApiFallback : true,
		stats : { colors: true },
	})
	.listen(3000, 'localhost', function (err) {
		// Server listening
		if(err) {
			gutil.log(gutil.colors.red('[Webpack-Dev-Server] Error'), err.toString());
		}
		gutil.log(gutil.colors.green('[Webpack-Dev-Server]'), 'Running on http://localhost:3000/');
		//callback();
	});
});

gulp.task("example", function(callback) {
	webpack({
		// configuration
	}, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack", err);
		gutil.log("[webpack]", stats.toString({
			// output options
		}));
		callback();
	});
});

gulp.task("test", function(callback) {

});
