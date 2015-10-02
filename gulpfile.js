var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', [
	'copy',
	'minify'
]);

gulp.task('copy', function () {
	return gulp.src('source/jquery.autofocus.js')
			.pipe(gulp.dest('dist'));
});

gulp.task('minify', function () {
	return gulp.src('source/jquery.autofocus.js')
			.pipe(uglify())
			.pipe(rename('jquery.autofocus.min.js'))
			.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp.watch('source/jquery.autofocus.js', ['copy']);
	gulp.watch('source/jquery.autofocus.js', ['minify']);
});