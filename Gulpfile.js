/* global require */

'use strict';

var gulp,
  requireDir,
  buildStylesDist,
  buildStylesDev,
  buildHtmlsDev,
  buildHtmlsDist,
  demo,
  all;

gulp = require( 'gulp' );
requireDir = require( 'require-dir' );

buildStylesDist = requireDir( './tasks/styles/build/dist' );
buildStylesDev = requireDir( './tasks/styles/build/dev' );
buildHtmlsDev = requireDir( './tasks/htmls/build/dev' );
buildHtmlsDist = requireDir( './tasks/htmls/build/dist' );
demo = requireDir( './tasks/demo' );
all = requireDir( './tasks' );