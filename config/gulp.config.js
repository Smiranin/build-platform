const config = {

    path: {
        app: { //Пути откуда брать исходники
            html: './src/app/index.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            scripts: '../src/app/main.js',//В стилях и скриптах нам понадобятся только main файлы
            styles: './src/app/main.less',
            assets: './src/assets/**',
            video: './src/app/video/*',
            php: './src/app/php/**/*.*',
            utility: ['./src/app/utility_files/*', './src/app/utility_files/.htaccess'],
            img: './src/app/assets/img/**/*.*' //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        },

        dist: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: './dist',
            scripts: './dist/js',
            styles: './dist/css',
            assets: './dist',
            img: './dist/img',
            video: './dist/video',
            php: './dist/php',
            serve: './dist'
        },

        watch: {
            html: './src/app/**/*.html',
            styles: './src/app/**/*.less',
            scripts: './src/app/**/*.js',
            assets: './src/assets/**/*.*',
            img: './src/assets/img/**/*.*',
            serve: './dist/**/*.*'
        },
        clean: './dist'
    }
};

module.exports = config;