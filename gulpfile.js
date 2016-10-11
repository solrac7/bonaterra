'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');
    // historyApiFallback = require('connect-history-api-fallback');


// Servidor web de desarrollo
gulp.task('server', function() {
  connect.server({
    root: 'app',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true
    // middleware: function(connect, opt) {
    //   return [ historyApiFallback ];
    // }
  });
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
  gulp.src('./app/**/*.html')
  .pipe(gulp.dest('./app'))
  .pipe(connect.reload());
});


// Compilador de sass y recarga los cambios
gulp.task('css', function(){  
  return gulp.src('./app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'))
    .pipe(connect.reload());
});

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/sass/**/*.sass'], ['css']);
});


gulp.task('default', ['server', 'watch']);