import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import browserSync from 'browser-sync'

let bableOptions = {
  optional: ["es7.decorators"]
, modules: 'system'
}

// intialize browserSync
browserSync.create()


gulp.task('build:js', () => {
    return gulp.src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel(bableOptions))
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
})

gulp.task('watch:js', ['build:js'], browserSync.reload)

gulp.task('serve', () => {
    browserSync.init({ server: { baseDir: "./" }})
    gulp.watch('./src/**/*.js', ['watch:js'])
    gulp.watch('./**/*.html', browserSync.reload)
})

gulp.task('default', ['build:js', 'serve'])
