/// <binding AfterBuild='default' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    jshint     = require('gulp-jshint'),
    sass       = require('gulp-sass'),
    npmFiles   = require('gulp-npm-files'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify');

gulp.task('default', ['jshint', 'scripts', 'sass', 'vendor'])

gulp.task('scripts', function () {
    return gulp.src('./Scripts/**/*.js')
        .pipe(sourcemaps.init())
        // .pipe(concat("application.min.js"))
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/js/'));
});

gulp.task('sass', function () {
    return gulp.src('./Content/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./wwwroot/css/'));
});

gulp.task('jshint', function () {
    return gulp.src('./Scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('vendor', function () {
    return gulp.src(npmFiles(), { base: './' })
        .pipe(gulp.dest('./wwwroot'));
})

gulp.task('watch', function () {
    gulp.watch('./Scripts/**/*.js', ['jshint', 'scripts']);

    gulp.watch('./Content/**/*.scss', ['sass']);
});