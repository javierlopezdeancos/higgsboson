'use strict';

var gulp = gulp || require('gulp');

gulp.task('install', [
	'install:dependencies:npm',
	'install:dependencies:bower',
	'install:dependencies:theme'
]);


