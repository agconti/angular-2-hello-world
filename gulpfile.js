var gulp = require('gulp')
  , sourcemaps = require('gulp-sourcemaps')
  , babel = require('gulp-babel')
  , concat = require('gulp-concat')
  , browserSync = require('browser-sync').create()


gulp.task('build:js', function () {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))

})

// create a task that ensures the `build:js` task is complete before
gulp.task('watch:js', ['build:js'], browserSync.reload)

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch('./src/**/*.js', ['watch:js'])
})

gulp.task('default', ['serve'])
