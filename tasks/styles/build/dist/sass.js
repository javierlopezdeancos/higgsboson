/* global require */

'use strict';

var gulp = gulp || require( 'gulp' ),
  scsslint = require( 'gulp-scss-lint' ),
  sass = require( 'gulp-sass' ),
  autoprefixer = require( 'gulp-autoprefixer' ),
  cssmin = require( 'gulp-cssmin' ),
  higgsboson = higgsboson || require( '../../../../higgsboson.json' );

gulp.task( 'sass', function () {
  return gulp.src( higgsboson.path.entryPoint.styles + '/' + higgsboson.entryPoint.styles + '.scss' )
    //.pipe(scsslint())
    .pipe( sass( {
      errLogToConsole: true
    } ) )
    .pipe( autoprefixer( {
      browsers: [ 'last 2 versions' ],
      cascade: true
    } ) )
    .pipe( cssmin() )
    .pipe( gulp.dest( higgsboson.path.distribution.styles ) );
} );