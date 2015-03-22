/* global require */

/*************************************/
/**  RECIPIE                        **/
/**  Name:   Demo                   **/
/**  Tasks:  scsslint               **/
/**          sass                   **/
/**          autoprefixer           **/
/**          cssmin                 **/
/**  Output: server                 **/
/*************************************/

'use strict';

var gulp = gulp || require( 'gulp' ),
  browserSync = require( 'browser-sync' ),
  reload = browserSync.reload,
  higgsboson = higgsboson || require( '../../higgsboson.json' );

gulp.task( 'browserSyncSass', [ 'build:dev:styles:sass' ], function () {
  reload( {
    stream: true
  } );
} );

gulp.task( 'server', [ 'browserSyncSass' ], function () {
  browserSync( {
    server: "./" + higgsboson.path.development
  } );
  gulp.watch( "app/scss/*.scss", [ 'browserSyncSass' ] );
  gulp.watch( "app/*.html" ).on( 'change', reload );
} );