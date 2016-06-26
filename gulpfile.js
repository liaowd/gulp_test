var gulp=require('gulp');
var sass=require('gulp-sass');
var less=require('gulp-less');

// gulp.task('sass',function(){
// 	return gulp.src('./src/index1.sass')
// 	.pipe(sass())
// 	.pipe(gulp.dest('./build'));
// 	console.log('sass ok')
// });

gulp.task('less',function(){
	return gulp.src('./src/index2.less')
	.pipe((less())
	.pipe(gulp.dest('./build'));
	// console.log('less ok')
});

gulp.task('default',['less'],function(){
	


	console.log('ok')
})