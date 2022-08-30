//  套件定義
//  在 package.json 內引用的套件
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
var sass = require('gulp-sass')(require('sass'));

// 定義路徑
const paths = {
    script: {
        src: 'js/@(_)*.js', // 匹配一次包含 _ 的所有 js 檔案
        dest: 'build/'
    },
    style: {
        src: 'scss/**/*.scss',
        dest: 'build/'
    },
};

// 建構工作
const buildScript = async function (cb) {
    gulp.src(paths.script.src)
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.script.dest));
    cb();
};

const buildStyle = async function (cb) {
    gulp.src(paths.style.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.style.dest));
    cb();
};

// 監看工作
const watchFiles = () => {
    gulp.watch([paths.script.src, paths.style.src], gulp.series(buildScript, buildStyle));
};

// 輸出工作
exports.default = gulp.series(buildScript, buildStyle, watchFiles);