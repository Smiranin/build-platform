var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence');

var path = require('./config/gulp.config').path;


function requireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback) {
        var task = require(path).call(this, options);

        return task(callback);
    });
}



requireTask('html', './tasks/html', {
    src: path.app.html,
    dest: path.dist.html
});




requireTask('styles', './tasks/styles', {
    src: path.app.styles,
    dest: path.dist.styles
});




requireTask('scripts', './tasks/scripts', {
    src: path.app.scripts,
    dest: path.dist.scripts
});




requireTask('assets', './tasks/assets', {
    src: path.app.assets,
    dest: path.dist.assets
});



gulp.task('clean', function() {
    return del(path.clean);
});



gulp.task('build', function (cb) {
    runSequence('clean',
    ['assets', 'styles', 'scripts'],
    'html',
    cb)
});



gulp.task('default', function (cb) {
    runSequence('build',
        ['watch', 'serve'],
        cb
    )
});




gulp.task('watch', function () {

    gulp.watch(path.watch.html, ['html']);
    gulp.watch(path.watch.styles, ['styles']);
    gulp.watch(path.watch.scripts, ['scripts']);
    gulp.watch(path.watch.assets, ['assets']);

});



requireTask('serve', './tasks/serve', {
    src: path.dist.serve,
    watch: path.watch.serve
});

