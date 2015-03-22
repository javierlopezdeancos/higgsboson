/* global require */

'use strict';

var gulp = gulp || require( 'gulp' );

gulp.task( 'build:dev', [
  'build:dev:styles:sass'
] );

gulp.task( 'build:dist', [
  'build:dist:styles:sass'
] );