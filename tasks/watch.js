var gulp   = require('gulp');

gulp.task('watch',function(){
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/assets/scss/**/*.scss', ['css']);
    gulp.watch('app/layout/**/*.jade', ['jade']);
});