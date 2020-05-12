var gulp = require('gulp');
var config = require('../config.js');

gulp.task('copy:img', function () {
  return gulp
    .src('src/**/*.{jpg,png,jpeg,svg,gif}')
    .pipe(gulp.dest('build/img'));
});

gulp.task('copy:catalogs', function () {
  return gulp
    .src('src/catalogs/*')
    .pipe(gulp.dest('build/catalogs'));
});

gulp.task('copy:fonts', function () {
  return gulp
    .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('copy', gulp.parallel(
  // 'copy:img',
  // 'copy:fonts',
  'copy:catalogs'
));
gulp.task('copy:watch', function () {
  gulp.watch('src/**/*.{jpg,png,jpeg,svg,gif}', ['copy']);
});