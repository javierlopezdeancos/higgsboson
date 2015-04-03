/* global require */

/*************************************/
/**  RECIPIE                        **/
/**  Name:   Demo BrowserSync       **/
/**  Tasks:  build:dist:styles:sass **/
/**          browserSyncSass        **/
/**          browserSync            **/
/**          watch                  **/
/**  Output: server                 **/
/*************************************/

module.exports = function() {

  'use strict';

  var gulp = gulp || require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    options,
    higgsboson = higgsboson || require('../../higgsboson.json');

  var options = {
    server: {
      baseDir: './' + higgsboson.path.development.root,
      index: '/htmls/' + higgsboson.entryPoint.htmls + '.html',

      //directory: true
    }
  };

  gulp.task('browserSync', ['build:dev'], function() {
    reload({
      stream: true
    });
  });

  gulp.task('server', ['browserSync'], function() {
    browserSync(options);
    gulp.watch(higgsboson.path.sources.styles + '/**/*.scss', ['browserSync']).on('change', reload);
    gulp.watch(higgsboson.path.sources.htmls + '/**/*.html', ['browserSync']).on('change', reload);
  });

};
