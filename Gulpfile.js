/* global require */

'use strict';

var gulp,
  requireDir,
  buildStylesDist,
  buildStylesDev,
  demo,
  all;

gulp = require( 'gulp' );
requireDir = require( 'require-dir' );

buildStylesDist = requireDir( './tasks/styles/build/dist' );
buildStylesDev = requireDir( './tasks/styles/build/dev' );
demo = requireDir( './tasks/demo' );
all = requireDir( './tasks' );