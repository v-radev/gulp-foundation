var config   = require('../config');
var gulp     = require('gulp');
var path     = require('path');
var watch    = require('gulp-watch');
var notifier = require('node-notifier');

var watchTask = function() {
    config.watchableTasks.forEach(function(taskName) {
        var task = config.tasks[taskName],
            glob;
        if( task ) {
            glob = path.join(config.root.source, task.source, '**/*.{' + task.extensions.join(',') + '}');
            watch(glob, function() {
                require('./' + taskName)();
                notifier.notify({ title: "WATCHER", message: "Compiled '" + taskName + "' task."});
            });
        }
    });
};

gulp.task('watch', ['browserSync'], watchTask);

module.exports = watchTask;