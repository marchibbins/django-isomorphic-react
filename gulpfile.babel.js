'use strict';

import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('js', () => {
    return browserify('mysite/src/main.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('mysite/static'));
});

gulp.task('watch', () => {
    gulp.watch('mysite/src/**/*.js', ['js']);
});

gulp.task('default', ['js']);
