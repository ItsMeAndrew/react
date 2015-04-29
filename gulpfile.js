var gulp = require("gulp");
var browserify = require('gulp-browserify');
var babelify = require("babelify");

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
  	.pipe(browserify({transform:'babelify'}))
    .pipe(gulp.dest("build"));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['babel']);
});
