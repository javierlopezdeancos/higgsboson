/*************************************/
/**  RECIPIE                        **/
/**  Name:   Install Dependencies   **/
/**  Tasks:  install:depdendencies  **/
/**          browserSyncSass        **/
/**          browserSync            **/
/**          watch                  **/
/**  Output: install                **/
/*************************************/

'use strict';

var gulp = gulp || require('gulp'),
  shell = require('gulp-shell'),
  higgsboson = higgsboson || require('../../../../higgsboson.json'),
  theme = require('../../../../theme.json');

gulp.task('install:dependencies:bower', shell.task([
  'bower install',
]));

gulp.task('install:dependencies:npm', shell.task([
  'npm install',
]));

gulp.task('install:dependencies:theme', shell.task([
  'bower install ' + theme.url,
]));