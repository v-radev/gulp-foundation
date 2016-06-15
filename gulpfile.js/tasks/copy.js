var config = require('../config');
var gulp   = require('gulp');

if( !config.tasks.copy ) {
    return;
}

var copyTask = function () {
    var files = config.tasks.copy.files,
        i;

    for (i = 0; i < files.length; i++) {
        gulp.src( files[i].source ).pipe( gulp.dest( files[i].destination ) );
    }
};

gulp.task('copy', copyTask);
module.exports = copyTask;
