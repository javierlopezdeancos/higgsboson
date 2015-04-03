module.exports = function() {

  'use strict';

  var gulp = gulp || require('gulp'),
  bump = require('gulp-bump'),
  captureParams = require('minimist'),
  gutil = require('gulp-util'),
  higgsboson = higgsboson || {},
  bower = bower || {};

  higgsboson.config = require('../higgsboson.json');

  var getBowerJson = function() {
    return require('../bower.json');
  };

  var getCliParamsVersion = function() {
    var knownOptions = {
      string: 'type',
      default: {
        env: process.env.NODE_ENV || 'minor'
      }
    };
    return captureParams(process.argv.slice(2), knownOptions);
  };

  gulp.task('changeVersion', function() {
    var versionToClose = getCliParamsVersion();
    return gulp.src(['./bower.json', './package.json'])
			.pipe(bump({
  			type: versionToClose.type
			}))
			.pipe(gulp.dest('./'));
  });

  gulp.task('showVersion', ['changeVersion'], function() {
    bower = getBowerJson();
    gutil.log(gutil.colors.red('The current version to project is: '), gutil.colors.green(bower.version));
  });

  gulp.task('showVersionOnly', function() {
    bower = getBowerJson();
    gutil.log(gutil.colors.red('The current version to project is: '), gutil.colors.green(bower.version));
  });

  gulp.task('version', [
  'version:show'
  ]);

  gulp.task('version:change', [
  'changeVersion',
  'showVersion'
  ]);

  gulp.task('version:show', [
  'showVersionOnly'
  ]);

};
