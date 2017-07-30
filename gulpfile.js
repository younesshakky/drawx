const gulp = require('gulp');
const connect = require('gulp-connect')
const concat = require('gulp-concat')


gulp.task('serve', () => {
  connect.server({
    port: 3000,
    host: 'localhost'
  })
})

gulp.task('concatJS', () => {
  return gulp.src('src/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./'))
});


gulp.task('concatJS:watch', () => {
  gulp.watch('./src/*.js', ['concatJS'])
});

gulp.task('default', ['serve', 'concatJS', 'concatJS:watch'])