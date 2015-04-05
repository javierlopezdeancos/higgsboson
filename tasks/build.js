'use strict';

var gulp = gulp || require('gulp');

gulp.task('build:dev', [
'build:dev:styles:sass',
'copy:dev:html'
]);

gulp.task('build:dist', [
'build:dist:styles:sass',
'copy:dist:html'
]);

