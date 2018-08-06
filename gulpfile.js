const gulp = require('gulp');

    gulp.task('default', function() {


        });

gulp.task('styles', function() {
        gulp.src('sass/**/*.scss')
          .pipe(sass())
          .pipe(gulp.dest('./css'));
        });


gulp.task('styles', function() {
        gulp.src('sass/**/*.scss')
          .pipe(sass()).on('error', sass.logError)
          .pipe(gulp.dest('./css'));
        });

var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();
