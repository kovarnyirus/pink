var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('style', function() {
  return gulp.src('app/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({browsers: [
        "last 2 versions"
          ]}))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('css-libs', ['style'], function(){
  return gulp.src('app/css/style.css')
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css'));
})

gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: 'app'
    },
    notify:false
  });
});

gulp.task('watch', ['browser-sync', 'css-libs'], function(){
  gulp.watch('app/less/**/*.less', ['style']);
  gulp.watch('app/css/*.css', ['css-libs']);
  gulp.watch('app/css/*.css', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
})
