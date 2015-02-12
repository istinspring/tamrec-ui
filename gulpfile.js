var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var expect = require('gulp-expect-file');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

var assetsDest = 'tamrec-ui/build';
var ghPages = 'gh-pages';
var lessAssets = [
    'tamrec-ui/less/main.less',
    'tamrec-ui/less/loading-bar.less'
];
var jsAssets = [
    'tamrec-ui/js/*.js',
    'tamrec-ui/js/**/*.js'
];
var vendorsCSS = [
    'tamrec-ui/vendors/angular-material/angular-material.css'
];
var vendorsJS = [
    'tamrec-ui/vendors/angular/angular.js',
    'tamrec-ui/vendors/angular-aria/angular-aria.js',
    'tamrec-ui/vendors/angular-animate/angular-animate.js',
    'tamrec-ui/vendors/angular-ui-router/release/angular-ui-router.js',
    'tamrec-ui/vendors/angular-material/angular-material.js',
    'tamrec-ui/vendors/angular-loading-bar/build/loading-bar.js'
];

gulp.task('watch', function() {
    gulp.watch('./tamrec-ui/less/*.less', ['compile-less']);
    gulp.watch('./tamrec-ui/js/*.js', ['process-js']);
    gulp.watch('./tamrec-ui/js/**/*.js', ['process-js']);
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

gulp.task('process-js', function() {
    return gulp
        .src(jsAssets)
        .pipe(ngAnnotate())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(assetsDest));
});

gulp.task('vendors-css', function() {
    return gulp
            .src(vendorsCSS)
            .pipe(expect(vendorsCSS))
            .pipe(sourcemaps.init())
            .pipe(minifyCSS({keepBreaks:true}))
            .pipe(concat('vendors.min.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(assetsDest));
});

gulp.task('vendors-js', function() {
    return gulp
        .src(vendorsJS)
        .pipe(expect(vendorsJS))
        .pipe(ngAnnotate())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('vendors.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(assetsDest));
});

gulp.task('serve', [
    'watch', 'compile-less', 'process-js',
    'vendors-css', 'vendors-js'
    ],
    function() {
        gulp.src('./tamrec-ui')
            .pipe(webserver({
                livereload: true,
                directoryListing: false,
                open: true
            }));
});

gulp.task('see', function () {
    gulp.src('./gh-pages')
    .pipe(webserver({
        livereload: false,
        directoryListing: false,
        open: true
    }));
});

gulp.task('html',
    [
        'compile-less', 'process-js',
        'vendors-css', 'vendors-js'
    ],
    function () {
        gulp.src('./tamrec-ui/build/*.min.js').pipe(gulp.dest('./gh-pages/build'));
        gulp.src('./tamrec-ui/build/*.min.css').pipe(gulp.dest('./gh-pages/build'));
        gulp.src('./tamrec-ui/index.html').pipe(gulp.dest(ghPages));
    }
);
