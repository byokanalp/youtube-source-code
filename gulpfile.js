var gulp        = require('gulp'),
    browserSync = require('browser-sync')

let PATH = {
    root   : '_WATCH/',
    trials : '__'
}

gulp.task('browser-sync', () => {
    browserSync.init({
        browser: 'opera',
        notify: false,
        server: {
            baseDir: './' + PATH.root + PATH.trials,
            proxy: '127.0.0.1:8000',
        }
    })
})

gulp.task('watch', () => {
    gulp.watch(PATH.root + PATH.trials + '**/*.html').on('change', () => { 
        browserSync.reload() 
    })
    gulp.watch(PATH.root + PATH.trials + '**/*.css').on('change', () => { 
        browserSync.reload() 
    })
    gulp.watch(PATH.root + PATH.trials + '**/*.js').on('change', () => { 
        browserSync.reload() 
    })
})


gulp.task('default', ['browser-sync' , 'watch'])