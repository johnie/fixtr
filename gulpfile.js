var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    connect = require('gulp-connect');

gulp.task('connectDev', function () {
  connect.server({
    root: './',
    port: 3000,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./js/*.js')
    .pipe(connect.reload());
});

gulp.task('stylus', function () {
  gulp.src('./style/master.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html', './js/templates/*.html'], ['html']);
  gulp.watch(['./style/*.styl'], ['stylus']);
  gulp.watch(['./js/*.js', '!./js/vendor'], ['js']);
});

gulp.task('default', ['connectDev', 'watch']);
