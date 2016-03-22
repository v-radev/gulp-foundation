var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    //merge = require('merge-stream'),
    merge = require('merge2'),
    postcss = require('gulp-postcss'),
    csswring = require('csswring'),
    scss = require('gulp-ruby-sass');


var config = {
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        mainJS: './src/main.js'
    },
    sass: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ]
};

gulp.task('default', ['compile-css']);

// // Compile CSS files (without sourcemaps)
// gulp.task('compile-css', function() {
//     var sassStream = gulp.src(['./source/css/style.scss'])
//     	.pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.write('./'))
//         .pipe(concat('scss-files.scss'));

//     var cssStream = gulp.src(['./node_modules/spectrum-colorpicker/spectrum.css'])
//         .pipe(concat('css-files.css'));

//     var mergedStream = merge(sassStream, cssStream)
//         .pipe(concat('styles.css'))
//         .pipe(gulp.dest('./public/css/'));

//     return mergedStream;
// });

//TODO check this http://stackoverflow.com/questions/30002085/gulp-concat-scss-with-css
// - to make sourcemaps() because the above one does not
// - but this example uses ruby-sass so change the one at the top


//TODO merge js files