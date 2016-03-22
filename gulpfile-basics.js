var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint');


// gulp.task('mytask', function() {
//   //do stuff
// });

// gulp.task('dependenttask', ['mytask'], function() {
//   //do stuff after 'mytask' is done.
// });


//gulp.task('build-js', function() {
//  return gulp.src('source/javascript/**/*.js')
//    .pipe(sourcemaps.init())
//      .pipe(concat('bundle.js'))
//      //only uglify if gulp is ran with '--type production'
//      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
//    .pipe(sourcemaps.write())
//    .pipe(gulp.dest('public/assets/javascript'));
//});


// define the default task and add the watch task to it, 
//so when you run just 'gulp' in the console this will start the default task which depends on the watch task
gulp.task('default', ['watch']);


// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('source/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('source/js/**/*.js', ['jshint']);
});
