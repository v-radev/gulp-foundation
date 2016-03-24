var config = require('../config');

var assetTasks = ['images'];
var codeTasks = ['js'];

module.exports = function() {

    function matchFilter(task) {
        if( config.tasks[task] ) {
          return task;
        }
    }

    function exists( value ) {
        return !!value;// convert to boolean
    }

    return {
        assetTasks: assetTasks.map( matchFilter ).filter( exists ),
        codeTasks: codeTasks.map( matchFilter ).filter( exists )
    };
};