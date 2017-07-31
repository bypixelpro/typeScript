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
        .pipe(gulp.dest('/'));
});

gulp.task('browserify', function() {
  return browserify({
        basedir: '.',
        debug: true,
        entries: ['app/ts/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('frontend.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('default', ['browserify', 'copyHtml'], function () {
    gulp.watch('app/ts/**/*.ts', ['browserify']);
    gulp.watch('**/*.html', ['copyHtml']);
});