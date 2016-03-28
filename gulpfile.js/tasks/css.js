var config = require('../config');

if( !config.tasks.css ) {
    return;
}

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var path        = require('path');
var gulpUtil    = require('gulp-util');
var env         = gulpUtil.env.env;

var paths = {
    source: path.join( config.root.source, config.tasks.css.source, '/*.{' + config.tasks.css.extensions + '}' ),
    destination: path.join( config.root.destination, config.tasks.css.destination )
};

var cssTask = function () {
    return gulp.src( paths.source )
        .pipe( env === 'production' ? gulpUtil.noop() : sourcemaps.init() )
        .pipe( sass().on('error', sass.logError) )
        .pipe( env === 'production' ? gulpUtil.noop() : sourcemaps.write('./') )
        .pipe( gulp.dest( paths.destination ) )
        .pipe( env === 'production' ? gulpUtil.noop() : browserSync.stream() );
};

gulp.task('css', cssTask);
module.exports = cssTask;