'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
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

// var gulp = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass = require('gulp-sass');

// gulp.task('sass', function(done) {
//     gulp.src("scr/scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("scr/css"))
//         .pipe(browserSync.stream());


//     done();
// });

// gulp.task('serve', function(done) {

//     browserSync.init({
//         server: "src/"
//     });

//     gulp.watch("scr/sass/*.sass", gulp.series('sass'));
//     gulp.watch("scr/*.html").on('change', () => {
//       browserSync.reload();
//       done();
//     });
  

//     done();
// });

// gulp.task('default', gulp.series('sass', 'serve'));