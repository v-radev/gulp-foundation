var config = require('../config');

if( !config.tasks.images ) {
    return;
}

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var imagemin    = require('gulp-imagemin');
var path        = require('path');

var paths = {
    source: path.join( config.root.source, config.tasks.images.source, '/**' ),
    destination: path.join( config.root.destination, config.tasks.images.destination )
};

var imagesTask = function() {
    return gulp.src(paths.source)
        .pipe( changed(paths.destination) )   // ignore unchanged files
        .pipe( imagemin() )                   // optimize
        .pipe( gulp.dest(paths.destination) )
        .pipe( browserSync.stream() );
};

gulp.task('images', imagesTask);

module.exports = imagesTask;