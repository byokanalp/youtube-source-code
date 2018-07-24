var gulp        = require('gulp'),
    browserSync = require('browser-sync')

let PATH = {
    root           : 'projects/_TRIALS/',
    currentProject : 'hj-canvas-ile-ates-efekti'
}

gulp.task('browser-sync', () => {
    browserSync.init({
        browser: 'opera',
        notify: false,
        server: {
            baseDir: './' + PATH.root + PATH.currentProject,
            proxy: '127.0.0.1:8000',
        }
    })
})


gulp.task('watch', () => {
    gulp.watch(PATH.root + PATH.currentProject + '**/*.html').on('change', () => { 
        browserSync.reload() 
    })
    gulp.watch(PATH.root + PATH.currentProject + '**/*.css').on('change', () => { 
        browserSync.reload() 
    })
    gulp.watch(PATH.root + PATH.currentProject + '**/*.js').on('change', () => { 
        browserSync.reload() 
    })
})


gulp.task('default', ['browser-sync' , 'watch'])