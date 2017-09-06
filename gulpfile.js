var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['/*.html']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
<<<<<<< HEAD
        .pipe(gulp.dest('/'));
=======
        .pipe(gulp.dest('/dist'));
>>>>>>> desarrollo
});

gulp.task('browserify', function() {
  return browserify({
        basedir: '.',
        debug: true,
<<<<<<< HEAD
        entries: ['app/ts/main.ts'],
=======
        entries: ['src/main.ts'],
>>>>>>> desarrollo
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
<<<<<<< HEAD
    .pipe(source('frontend.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/js/'));
=======
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'));
>>>>>>> desarrollo
});

gulp.task('default', ['browserify', 'copyHtml'], function () {
    gulp.watch('app/ts/**/*.ts', ['browserify']);
    gulp.watch('**/*.html', ['copyHtml']);
});