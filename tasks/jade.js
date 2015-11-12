
var gulp       = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    jade       = require('gulp-jade');

gulp.task('jade', ['generate-index'], function() {
  var opts = {comments:true};

  gulp.src(['./app/layout/**/*.jade', '!./app/layout/index.jade'])
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./public/'))
});



gulp.task('generate-index', function(){
	gulp.src('./app/layout/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./public/'))
});