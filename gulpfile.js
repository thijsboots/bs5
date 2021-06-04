let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify');

const paths = {
    scss: {
        src: './scss/style.scss',
        dest: './css',
        watch: './scss/**/*.scss'
    },
    js: {
        bootstrap_src: './node_modules/bootstrap/dist/js/bootstrap.min.js',
        bootstrap_dest: './js/bootstrap',
        popper: './node_modules/@popperjs/core/dist/umd/popper.min.js',
        popper_dest: './js/popper',
        theme_src: './js/src/*.js',
        theme_dest: './js'
    },
    twig: {
        watch: './templates/**/*.twig'
    },
};

// Compresss theme JS
function buildjs() {
    return gulp
        .src([paths.js.theme_src])
        .pipe(gulp.dest(paths.js.theme_dest))
        .pipe(browserSync.stream());
}

// Compile sass into CSS & auto-inject into browsers
function compile() {
    var sassOptions = {
        outputStyle: 'expanded',
        indentType: 'space',
        indentWidth: 2,
        linefeed: 'lf'
    };

    return gulp
        .src([paths.scss.src], { sourcemaps: true })
        // .src([paths.scss.src])
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        // .pipe(gulp.dest(paths.scss.dest))
        .pipe(gulp.dest([paths.scss.dest], { sourcemaps: true }))
        .pipe(browserSync.stream());
}

// Move the Bootstrap JavaScript files into our js/bootstrap folder.
function move_bootstrap_js_files() {
    return gulp
        .src([paths.js.bootstrap_src])
        .pipe(gulp.dest(paths.js.bootstrap_dest))
        .pipe(browserSync.stream());
}

// Move the Popper JavaScript files into our js/popper folder.
function move_popper_js_files() {
    return gulp
        .src([paths.js.popper])
        .pipe(gulp.dest(paths.js.popper_dest))
        .pipe(browserSync.stream());
}

// Watching scss files.
function watch() {

    browserSync.init({
        proxy: "bs5.localhost:8888",
        open: false
    });

    // gulp.watch([paths.js.theme_src], buildjs).on('change', browserSync.reload);
    gulp.watch([paths.js.theme_src], buildjs);
    gulp.watch([paths.scss.watch], compile);
    gulp.watch([paths.twig.watch]).on('change', browserSync.reload);
}

const build = gulp.series(buildjs, compile, move_bootstrap_js_files, move_popper_js_files, gulp.parallel(watch));

exports.buildjs = buildjs;
exports.compile = compile;
exports.move_bootstrap_js_files = move_bootstrap_js_files;
exports.move_popper_js_files = move_popper_js_files;
exports.watch = watch;

exports.default = build;