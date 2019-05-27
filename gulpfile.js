
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');


gulp.task('sass',function(){
	return gulp.src('app/scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'));
});


//single task for image compressed
gulp.task('image', ()=>
	gulp.src('app/iamges/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/cmpImage'))
);


// multi task in one 
gulp.task('allgulp', ()=>

	//1
	gulp.src('app/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/cmpImage')),

	//2
	gulp.src('app/scss/style.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('app/css'))
		
)

