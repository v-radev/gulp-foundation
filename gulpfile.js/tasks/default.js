var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../library/enabledTasks');

var defaultTask = function ( cb ) {
    var tasks = getEnabledTasks();

    gulpSequence('clean', tasks.assetTasks, 'watch', tasks.codeTasks, cb);
};

gulp.task('default', defaultTask);

module.exports = defaultTask;
