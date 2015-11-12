
var gulp            = require('gulp'),
	  concat          = require('gulp-concat'),
	  rename          = require('gulp-rename'),
    uglify    		  = require('gulp-uglify'),
    angularFilesort = require('gulp-angular-filesort'),
    naturalSort     = require('gulp-natural-sort'),
    ngAnnotate = require('gulp-ng-annotate');

// Task for concat and minifier the *.js files
gulp.task('js', function() {
  return gulp.src(['./app/**/*.js'])
      .pipe(naturalSort())
      .pipe(angularFilesort())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./public/scripts/'));
});
