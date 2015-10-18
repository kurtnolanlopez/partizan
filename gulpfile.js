//var gulp = require('gulp'),
//    nodemon = require('gulp-nodemon'),
//    sass = require('gulp-sass'),
//    concat    = require('gulp-concat'),
//    minifyCSS = require('gulp-minify-css'),
//    rename    = require('gulp-rename'),
//    livereload = require('gulp-livereload');
//
//
//gulp.task('sass', function () {
//    gulp.src('public/assets/css/**/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('public/assets/css'))
//        .pipe(concat('style.css'))
//        .pipe(gulp.dest('public/assets/css'))
//        .pipe(minifyCSS())
//        .pipe(rename('style.min.css'))
//        .pipe(gulp.dest('public/assets/css'))
//        .pipe(livereload());
//});
//
//gulp.task('css', function() {
//    gulp.src('public/assets/**/*.css')
//        .pipe(livereload());
//});
//gulp.task('html', function() {
//    gulp.src('public/**/*.html')
//        .pipe(livereload());
//});
//
//gulp.task('js', function() {
//    gulp.src('public/**/*.js')
//        .pipe(livereload());
//});
//
//gulp.task('nodemon',function() {
//    gulp.watch('public/assets/**/*.css', ['css']);
//    gulp.watch('public/**/*.html', ['html']);
//    gulp.watch('public/**/*.js', ['js']);
//    gulp.watch('public/assets/css/**/*.scss', ['sass']);
//
//    livereload.listen();
//    livereload();
//    nodemon({
//        // the script to run the app
//        script: 'index.js',
//        ext: 'js'
//    }).on('restart', function () {
//        // when the app has restarted, run livereload.
//        gulp.src('index.js');
//    });
//});
//
//
//gulp.task('default', ['nodemon']);
