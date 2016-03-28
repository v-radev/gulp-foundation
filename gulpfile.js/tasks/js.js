var config = require('../config');

if( !config.tasks.js ) {
    return;
}

var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync');
var path        = require('path');
var jshint      = require('gulp-jshint');
var stylish     = require('jshint-stylish');
var sourcemaps  = require('gulp-sourcemaps');
var gulpUtil    = require('gulp-util');
var env         = gulpUtil.env.env;

var paths = {
    source: path.join( config.root.source, config.tasks.js.source, '/*.js' ),
    destination: path.join( config.root.destination, config.tasks.js.destination )
};

var jsTask = function() {
    return gulp.src( paths.source )
        .pipe( env === 'production' ? gulpUtil.noop() : sourcemaps.init() )
        .pipe( jshint() )
        .pipe( jshint.reporter(stylish) )
        .pipe( jshint.reporter('fail') )
        .pipe( browserify() )
        .pipe( env === 'production' ? uglify() : gulpUtil.noop() )
        .pipe( env === 'production' ? gulpUtil.noop() : sourcemaps.write() )
        .pipe( gulp.dest( paths.destination ) )
        .pipe( env === 'production' ? gulpUtil.noop() : browserSync.stream() );
};

gulp.task('js', jsTask);

module.exports = jsTask;