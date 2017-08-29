const gulp = require('gulp');
const connect = require('gulp-connect')
const sass = require('gulp-sass')
const concat = require('gulp-concat')


gulp.task('serve', () => {
  connect.server({
    port: 3000,
    host: 'localhost'
  })
})

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({
      outputStyle: "expanded"
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('concatJS', () => {
  return gulp.src('scripts/src/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./scripts'))
});


gulp.task('concatJS:watch', () => {
  gulp.watch('./scripts/src/*.js', ['concatJS'])
});

gulp.task('default', ['serve', 'concatJS', 'concatJS:watch', 'sass', 'sass:watch'])
