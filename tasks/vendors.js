var gulp   = require('gulp'),
	  concat = require('gulp-concat'),
	  rename = require('gulp-rename');

var files = [
	'bower_components/angular/angular.min.js',
	'bower_components/angular-ui-router/release/angular-ui-router.min.js',
	'bower_components/material-design-lite/material.min.js'
];

gulp.task('build-vendors', function(){
	gulp.src(files)
		.pipe(concat('vendors.js'))
		.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/scripts/'));
});