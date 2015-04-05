/*************************************/
/**  RECIPIE                        **/
/**  Name:   Copy Html              **/
/**  Tasks:  copy                   **/
/**  Output: copy:dev:html          **/
/*************************************/

'use strict';

var gulp = gulp || require('gulp'),
 higgsboson = higgsboson || require('../../../../../../higgsboson.json');

gulp.task('copy:dev:html', function() {
  gulp.src(higgsboson.path.sources.htmls + '/**/*.*')
  .pipe(gulp.dest(higgsboson.path.development.htmls));
});

