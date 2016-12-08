var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('concat', function() {
   return gulp.src('app/less/blocks/*.less')
    .pipe(concat('style.less'))
    .pipe(gulp.dest("app/less"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('less', function() {
   return gulp.src('app/less/*.less')
    .pipe(less())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: 'app'
    },
    notify:false
  });
});

gulp.task('watch', ['browser-sync', 'less'], function(){
  gulp.watch('app/less/blocks/*.less',['concat']);
  gulp.watch('app/less/*.less',['less']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
})
