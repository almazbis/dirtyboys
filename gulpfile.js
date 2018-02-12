var gulp = require('gulp');
var pump = require('pump');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var fileinclude = require('gulp-file-include');
var uglify = require('gulp-uglify');
 



gulp.task('fileinclude', function() {
  gulp.src(['./src/html/*.html'])
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe( gulp.dest('./build/') )
    .pipe( browserSync.stream({once: true}) );
});


gulp.task('fileinclude-js', function() {
  gulp.src(['./src/js/*.js'])
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe( uglify() )
    .pipe( gulp.dest('./build/js/') )
    .pipe( browserSync.stream({once: true}) );
});


// SCSS
gulp.task('scss', function(){
	gulp.src('./src/scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./build/css/'))
		.pipe( browserSync.stream() );
});



gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'build'
      },
      open: false
      // files: ['./build/*.html', './build/js/*.js']
   })
});

// BROWSER-SYNC
// gulp.task('live', function(){
//   gulp.src(['build/*.html', 'build/**/*.js'])
//   .pipe( browserSync.stream({ once: true }) );
// });



// Watch
gulp.task('watch', function(){
  gulp.watch('./src/scss/**/*.scss', ['scss']);
  gulp.watch('./src/html/**/*.html', ['fileinclude']);
  gulp.watch('./src/js/**/*.js', ['fileinclude-js']);
  // gulp.watch('build/*.html', ['live']);
});


// gulp.task('default', ['browserSync', 'scss', 'rigger', 'rigger-js', 'watch']);
gulp.task('default', ['browserSync', 'fileinclude', 'fileinclude-js', 'scss', 'watch']);
