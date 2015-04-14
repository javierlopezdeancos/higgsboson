/*********************************************************/
/**  RECIPIE                            								**/
/**  Name:   Install Dependencies       								**/
/**  Tasks:  install:depdendencies      								**/
/**          browserSyncSass            								**/
/**          browserSync                								**/
/**          watch                      								**/
/**  Output: install:dependencies:bower 								**/
/**          install:dependencies:npm   								**/
/**          install:dependencies:theme 								**/
/**          clean:dependencies:theme   								**/
/**          clean:dependencies:themeinstaledbydefault  **/
/** 				 rename:dependencies:theme 									**/
/*********************************************************/

'use strict';

var gulp = gulp || require('gulp'),
  shell = require('gulp-shell'),
  clean = require('gulp-clean'),
  higgsboson = higgsboson || require('../../../../higgsboson.json'),
  theme = require('../../../../theme.json'),
  bower = require('../../../../bower.json');

gulp.task('install:dependencies:bower', shell.task([
  'bower install'
]));

gulp.task('install:dependencies:npm', shell.task([
  'npm install',
]));

gulp.task('clean:dependencies:theme', function () {
  return gulp.src( higgsboson.path.dependencies + '/' + theme.key, {read: false})
    .pipe(clean());
});

gulp.task('clean:dependencies:themeinstaledbydefault', function () {
  return gulp.src( higgsboson.path.dependencies + '/' + theme.key + '-**', {read: false})
    .pipe(clean());
});

gulp.task('rename:dependencies:theme', function () {
  return gulp.src( higgsboson.path.dependencies + '/' + theme.key + '-**', {read: false})
    .pipe(gulp.dest(higgsboson.path.dependencies + '/' + theme.key));
});

gulp.task('install:dependencies:theme', shell.task([
  'bower install ' + theme.url,
]));