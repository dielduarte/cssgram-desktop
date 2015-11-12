var gulp         = require('gulp'),
    minifyCSS    = require('gulp-minify-css'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    cssGlobbing  = require('gulp-css-globbing'),
    cmq          = require('gulp-merge-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps');


// Task for concat and minfier  and convert sass to css files 
gulp.task('css', function() {

  gulp.src('./app/assets/scss/main.scss')
  	.pipe(cssGlobbing({ extensions: ['.scss', '.css'] }))
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', function(error){
        console.log(error);
    }))
    .pipe(autoprefixer({
            browsers: ['not ie <= 8'],
            cascade: false
    }))
    .pipe(concat('main.css'))
    .pipe(cmq())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/assets/css'));
});
