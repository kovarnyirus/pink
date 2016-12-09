var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
<<<<<<< HEAD
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
=======
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('concat', function() {
   return gulp.src('app/less/blocks/*.less')
    .pipe(concat('style.less'))
    .pipe(gulp.dest("app/less"))
    .pipe(browserSync.reload({stream: true}));
});
>>>>>>> origin/master


gulp.task('style', function() {
  return gulp.src('app/less/style.less')
    .pipe(plumber())
    .pipe(less())
<<<<<<< HEAD
    .pipe(autoprefixer({browsers: [
        "last 2 versions"
          ]}))
=======
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
>>>>>>> origin/master
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

<<<<<<< HEAD
gulp.task('watch', ['browser-sync', 'css-libs'], function(){
  gulp.watch('app/less/**/*.less', ['style']);
  gulp.watch('app/css/*.css', ['css-libs']);
  gulp.watch('app/css/*.css', browserSync.reload);
=======
gulp.task('watch', ['browser-sync', 'less'], function(){
  gulp.watch('app/less/blocks/*.less',['concat']);
  gulp.watch('app/less/*.less',['less']);
>>>>>>> origin/master
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
})
