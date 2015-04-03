/* global require */

/************************************/
/**  RECIPIE                       **/
/**  Name:   Build                 **/
/**  Tasks:  scsslint              **/
/**          sass                  **/
/**          autoprefixer          **/
/**          cssmin                **/
/**  Output: build:dev:styles:sass **/
/************************************/

module.exports = function() {

  'use strict';

  var gulp = gulp || require('gulp'),
    scsslint = require('gulp-scss-lint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    replace = require('gulp-replace'),
    clean = require('gulp-clean'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    higgsboson = higgsboson || require('../../../../higgsboson.json');

  gulp.task('fixPathDependencies', function() {
    gulp.src([higgsboson.path.dependencies + '/' + higgsboson.dependencies.internals.prefix + '*/**/entryPoints/*.scss'])
      .pipe(replace(/..\/.*\/bower_components\//g, '../../../../../' + higgsboson.path.dependencies + '/', {
        skipBinary: true
      }))
      .pipe(clean())
      .pipe(gulp.dest(higgsboson.path.dependencies));
  });

  gulp.task('build:dev:styles:sass', ['fixPathDependencies'], function() {
    return gulp.src(higgsboson.path.entryPoint.styles + '/' + higgsboson.entryPoint.styles + '.scss')
      .pipe(scsslint())
      .pipe(sass({
        errLogToConsole: true
      }))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
      }))
      .pipe(cssmin())
      .pipe(gulp.dest(higgsboson.path.development.styles))
      .pipe(reload({
        stream: true
      }));
  });

};
