var gulp   = require('gulp');
var clean  = require('gulp-clean');
var config = require('../config');

var cleanTask = function() {
    return gulp.src([
        config.root.dest + '/**/*.js',
        config.root.dest + '/**/*.css'
    ], {read: false})
        .pipe(clean());
};

gulp.task('clean', cleanTask);

module.exports = cleanTask;
