var config = require('../config');

if( !config.tasks.js ) {
    return;
}

var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var uglify      = require('gulp-uglify');
var browserSync = require('browser-sync');
var path        = require('path');

var paths = {
    source: path.join( config.root.source, config.tasks.js.source, '/**/*.js' ),
    destination: path.join( config.root.destination, config.tasks.js.destination )
};

var jsTask = function() {
    return gulp.src( paths.source )
        .pipe( browserify() )
        //.pipe( uglify() )//TODO for production only
        .pipe( gulp.dest( paths.destination ) )
        .pipe( browserSync.stream() );
};

gulp.task('js', jsTask);

module.exports = jsTask;