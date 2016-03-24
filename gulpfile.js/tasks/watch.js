var config = require('../config');
var gulp   = require('gulp');
var path   = require('path');
var watch  = require('gulp-watch');

var watchTask = function() {
    config.watchableTasks.forEach(function(taskName) {
        var task = config.tasks[taskName],
            glob;
        if(task) {
            glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
            watch(glob, function() {
                require('./' + taskName)();
            });
        }
    });
};

gulp.task('watch', ['browserSync'], watchTask);

module.exports = watchTask;