/*****************************************/
/**  RECIPIE                        		**/
/**  Name:   Install Dependencies   		**/
/**  Tasks:  install:depdendencies  		**/
/**          browserSyncSass        		**/
/**          browserSync            		**/
/**          watch                  		**/
/**  Output: install:dependencies:bower **/
/** 				 install:dependencies:npm   **/
/**  				 install:dependencies:theme **/
/*****************************************/

'use strict';

var gulp = gulp || require('gulp'),
  shell = require('gulp-shell'),
  higgsboson = higgsboson || require('../../../../higgsboson.json'),
  theme = require('../../../../theme.json'),
  bower = require('../../../../bower.json');;

gulp.task('install:dependencies:bower', shell.task([
	'bower install ' + bower.devDependencies['particle-higgsboson'],
  'bower install',
]));

gulp.task('install:dependencies:npm', shell.task([
  'npm install',
]));

gulp.task('install:dependencies:theme', shell.task([
  'bower install ' + theme.url,
]));