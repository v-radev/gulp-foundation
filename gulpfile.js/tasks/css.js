var config = require('../config');

if( !config.tasks.css ) {
    return;
}

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var path        = require('path');
var concat      = require('gulp-concat-css');
var gulpUtil    = require('gulp-util');
var env         = gulpUtil.env.env;
var cssmin      = require('gulp-cssmin');

var paths = {
    source: path.join( config.root.source, config.tasks.css.source, '/*.{' + config.tasks.css.extensions + '}' ),
    destination: path.join( config.root.destination, config.tasks.css.destination )
};

var cssSource = config.tasks.css.modules;

cssSource.push( paths.source );

var cssTask = function () {
    return gulp.src( cssSource )
        .pipe( env === 'production' ? gulpUtil.noop() : sourcemaps.init() )
        .pipe( sass().on('error', sass.logError) )
        .pipe( concat('style.css') )
        .pipe( env === 'production' ? gulpUtil.noop() : sourcemaps.write('./') )
        .pipe( env === 'production' ? cssmin() : gulpUtil.noop() )
        .pipe( gulp.dest( paths.destination ) )
        .pipe( env === 'production' ? gulpUtil.noop() : browserSync.stream() );
};

gulp.task('css', cssTask);
module.exports = cssTask;