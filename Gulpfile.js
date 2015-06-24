var gulp    = require('gulp'),
    webpack = require('gulp-webpack'),
    serve   = require('browser-sync'),
    sync    = require('run-sequence');

var paths = {
  app: ['client/app/**/*.{js,css,html}']
};

gulp.task('build', function() {
  return gulp.src('./client/app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('client'));
});


gulp.task('serve', function() {
  serve({
    port: 4500,
    open: false,
    server: {
      baseDir: 'client'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', serve.reload]);
});

gulp.task('dev', function(done) {
  sync('build', 'serve', 'watch', done);
});




