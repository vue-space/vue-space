const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('sass');

const source = './src/**/*.scss';
const outputDir = './dist';

function develop() {
  return gulp
    .src(source)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(outputDir, { overwrite: true }));
}

function watch() {
  gulp.watch(source, { ignoreInitial: false }, develop);
}

function build() {
  return gulp
    .src(source)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist', { overwrite: true }));
}

exports.watch = watch;
exports.build = build;
