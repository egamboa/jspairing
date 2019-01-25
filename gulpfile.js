'use strict';

let gulp = require('gulp'),
  concat = require('gulp-concat'),
  es = require('event-stream'),
  del = require('del');

let path = require('path'),
    manifest = require('./manifest'),
    buildDir = path.resolve('./public');

gulp.task('clean', () => {
  return del(buildDir + '/*');
});

gulp.task('build', gulp.series(['clean'], function (done) {
  let appJS = gulp.src(manifest.appJS)
    .pipe(concat('app.js'));

  let assets = es.merge(appJS)
    .pipe(gulp.dest(buildDir));

  done();
}));

gulp.task('live', function(){
  let files, paths, type;
  files = [];

  for (type in manifest) {
    files = files.concat(manifest[type]);
  }

  gulp.watch(files, gulp.series('build'))
});

gulp.task('default', gulp.parallel('build'));