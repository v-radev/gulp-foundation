var config = require('../config');

if( !config.tasks.js ) {
    return;
}

var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync');
var path        = require('path');
var jshint      = require('gulp-jshint');
var stylish     = require('jshint-stylish');
var gulpUtil    = require('gulp-util');
var plumber     = require('gulp-plumber');
var webpack     = require('webpack-stream');
var glob        = require('glob');
var env         = gulpUtil.env.env;
var hint        = gulpUtil.env.hint;

var paths = {
    source: path.join( config.root.source, config.tasks.js.source, '/*/*.js' ),
    destination: path.join( config.root.destination, config.tasks.js.destination )
};

var jsTask = function() {
  var files = glob.sync(paths.source);
  var entries = {};
  var webpackOptions;

  files.map(function(file){
    var foldersArray = file.split('/').reverse();
    var outputFolderName = foldersArray[1];
    var key = outputFolderName + '/' + file.substr(file.lastIndexOf('/') + 1);

    entries[key] = './' + file;
  });

  webpackOptions = {
    entry: entries,
    output: {
      path: path.join(__dirname, 'public/js'),
      filename: '[name]'
    },
    devtool: "#source-map"
  };

  return gulp.src( paths.source )
    .pipe( plumber() )
    .pipe( jshint() )
    .pipe( hint === 'false' ? gulpUtil.noop() : jshint.reporter(stylish) )
    .pipe( hint === 'false' ? gulpUtil.noop() : jshint.reporter('fail') )
    .pipe( webpack(webpackOptions) )
    .pipe( env === 'production' ? uglify() : gulpUtil.noop() )
    .pipe( gulp.dest( paths.destination ) )
    .pipe( env === 'production' ? gulpUtil.noop() : browserSync.stream() );
};

gulp.task('js', jsTask);

module.exports = jsTask;
