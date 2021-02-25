'use strict';

const { series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

function build() {
	return gulp.src([
		'{app/js,app/css}/*.*',
		'app/images/**/*.*',
		'!app/images/src/**/*',
		'app/fonts/**/*'
	], { base: 'app/' })
	.pipe(gulp.dest('build'))
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./app",
           index: "/index.html"
        }
    });
    gulp.watch('app/scss/**/*.scss', style)
    gulp.watch('./.html').on('change',browserSync.reload);
    gulp.watch('./js/*/.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.build = series(style, build);
exports.default = series(parallel(style, watch));

// exports.build = series(cleandist, scripts, styles, images, buildcopy, buildhtml)
// exports.default = series(parallel(style, watch));