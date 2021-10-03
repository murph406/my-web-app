
var gulp = require('gulp'),
    pkg = require('./package.json'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify');
// sequence = require('run-sequence'),



gulp.task('less', function () {
    return gulp.src('./src/less/main.less')
        .pipe(less({
            paths: ['./src/less']
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('cssmin', function () {
    return gulp.src('./src/css/main.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('watch', function () {
    gulp.watch('./src/less/*.less', gulp.series('less', 'cssmin'));
})

gulp.task('default', gulp.series('watch'))
