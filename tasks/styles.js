const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      autoprefixConfig = {
              browsers: ['last 3 versions'],
              cascade: false
          };

module.exports = function(options) {
  return function() {
    return gulp.src(options.src)
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer(autoprefixConfig))
      .pipe(gulp.dest(options.dest));
  };

};
