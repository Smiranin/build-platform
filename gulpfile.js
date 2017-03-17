const gulp = require('gulp'),
      gulpIf = require('gulp-if'),
      del = require('del');

const PATHS = require('./config/gulp.config');
const tasksVersion = process.env.NODE_ENV || 'development';

let requireTask = (taskName, path, options) => {

    options = options || {};
    options.taskName = taskName;

    gulp.task(taskName, (callback) => {
        let task = require(path).call(this, options);
        return task(callback);
    });
    }


    requireTask('styles', './tasks/styles', {
        src: PATHS.app.styles,
        dest: PATHS.public.styles
    });


    gulp.task('clear', () => {
         del(PATHS.clean);
    });


    gulp.task('default', ['clear', 'styles']);

