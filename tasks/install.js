'use strict';

var gulp = gulp || require('gulp');

gulp.task('install', [
	'clean:dependencies:theme',
	'install:dependencies:npm',
	'install:dependencies:bower',
	'install:dependencies:theme',
	'rename:dependencies:theme',
	'clean:dependencies:themeinstaledbydefault'
]);
