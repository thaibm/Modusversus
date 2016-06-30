/**
 * Created by Thaibm on 6/25/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
gulp.task('sass', function () {
    return gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['sass/**/*'], ['sass']);
});