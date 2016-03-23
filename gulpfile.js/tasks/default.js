var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../library/enabledTasks');

gulp.task('mytask', function() {
   console.log( 'EXECUTING "mystask"' );//TODO
});

var defaultTask = function ( cb ) {
    var tasks = getEnabledTasks();

    //gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', 'watch', cb);
    gulpSequence('clean', 'mytask', tasks.assetTasks, cb);
};

gulp.task('default', defaultTask);

module.exports = defaultTask;