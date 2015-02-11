var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var expect = require('gulp-expect-file');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

var lessAssets = 'tamrec-ui/less/main.less';
var assetsDest = 'tamrec-ui/build';

gulp.task('watch', function() {
    gulp.watch('./tamrec-ui/less/*.less', ['compile-less']);
});

gulp.task('compile-less', function() {
    return gulp
            .src(lessAssets)
            .pipe(expect(lessAssets))
            .pipe(sourcemaps.init())
            .pipe(less({compress: true}))
            .pipe(concat('app.min.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(assetsDest));
});

gulp.task('serve', ['watch'], function() {
    gulp.src('./tamrec-ui')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});
