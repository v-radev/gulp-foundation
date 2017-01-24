var config   = require('../config');
var gulp     = require('gulp');
var path     = require('path');
var watch    = require('gulp-watch');
var notifier = require('node-notifier');
var gulpUtil = require('gulp-util');
var env      = gulpUtil.env.env;
var browserSync = require('browser-sync');

if( env === 'production' ) {
    module.exports = function(){ };
    gulp.task('watch', function(){ });
    return;
}

var watchTask = function() {
    config.watchableTasks.forEach(function(taskName) {
        var task = config.tasks[taskName],
            glob;

        if(task) {
            glob = path.join(config.root.source, task.source, '**/*.{' + task.extensions.join(',') + '}');
            watch(glob, function() {
                if ( taskName != 'js' ){
                  require('./' + taskName)();
                  notifier.notify({ title: "WATCHER", message: "Task '" + taskName + "' has started."});
                } else {
                  browserSync.stream()
                }
            });
        }
    });
};

gulp.task('watch', ['browserSync'], watchTask);

module.exports = watchTask;
