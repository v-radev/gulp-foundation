var gulp   = require('gulp');
var clean  = require('gulp-clean');
var config = require('../config');

var cleanTask = function() {
    return gulp.src([
        config.root.destination + '/**/*.js',
        config.root.destination + '/**/*.css'
    ], {read: false})
        .pipe(clean());
};

gulp.task('clean', cleanTask);

module.exports = cleanTask;
