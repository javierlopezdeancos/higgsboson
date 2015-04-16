/*********************************************************/
/**  RECIPIE                                            **/
/**  Name:   Test integration styles                    **/
/**  Tasks:  test:styles:integration:dev                **/
/**  Output: test:styles:integration:dev                **/
/*********************************************************/

'use strict';

var gulp = gulp || require('gulp'),
  phantomcss = require('gulp-phantomcss'),
  replace = require('gulp-replace'),
  clean = require('gulp-clean'),
  configuration,
  higgsboson = higgsboson || require('../../../../../../../higgsboson.json');

configuration = {
  screenshotRoot: higgsboson.phantomcss.screenshotRoot,
  failedComparisonsRoot: higgsboson.phantomcss.failedComparisonsRoot,
  comparisonResultRoot: higgsboson.phantomcss.comparisonResultRoot,
  addLabelToFailedImage: higgsboson.phantomcss.addLabelToFailedImage,
  outputSettings: {
    errorColor: {
      red: higgsboson.phantomcss.outputSettings.errorColor.red,
      green: higgsboson.phantomcss.outputSettings.errorColor.green,
      blue: higgsboson.phantomcss.outputSettings.errorColor.blue
    },
    errorType: higgsboson.phantomcss.outputSettings.errorType,
    transparency: higgsboson.phantomcss.outputSettings.transparency
  },
};

gulp.task('setDevEnviroment', function() {
  gulp.src([higgsboson.path.tests.integration.styles + '/**/*.js'])
    .pipe(replace(/var\surl\s?=\s?(.*)\;/g, 'var url=\'' + higgsboson.server.dev.url + ':' + higgsboson.server.dev.port + '\';', {
      skipBinary: true
    }))
    .pipe(replace(/var\sconfiguration\s?=\s?(.*)\;/g, 'var configuration=' + JSON.stringify(configuration) + ';', {
      skipBinary: true
    }))
    .pipe(clean())
    .pipe(gulp.dest(higgsboson.path.tests.integration.styles));
});

gulp.task('test:styles:integration:dev', ['setDevEnviroment'], function() {
  gulp.src(higgsboson.path.tests.integration.styles + '/*.js')
    .pipe(phantomcss());
});
