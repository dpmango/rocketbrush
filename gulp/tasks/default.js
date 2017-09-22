var gulp        = require('gulp');
var runSequence = require('run-sequence');

// Default task
// runSequence 'build:dev' first and then watch for changes
gulp.task('default', function (callback) {
  runSequence(['build:development'], 'watch', 'server',
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('build:production',
    callback
  )
})

// Watch
gulp.task('watch',
  ['sass:watch',
  'pug:watch',
  'javascript:watch',
  'images:watch',
  'sprite:svg:watch'
]);
