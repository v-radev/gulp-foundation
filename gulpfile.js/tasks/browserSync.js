var gulpUtil    = require('gulp-util');
var env         = gulpUtil.env.env;
var sync        = gulpUtil.env.sync;
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../config');

if( env === 'production' ) {
    module.exports = function(){ };
    gulp.task('browserSync', function(){ });
    return;
}

if( sync === 'false' ) {
    module.exports = function(){ };
    gulp.task('browserSync', function(){ });
    return;
}

var browserSyncTask = function() {

    browserSync.init(config.tasks.browserSync);

};

gulp.task('browserSync', browserSyncTask);
module.exports = browserSyncTask;
