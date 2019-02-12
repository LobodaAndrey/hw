const gulp = require('gulp'), 
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      concat = require('gulp-concat'), 
      uglify = require('gulp-uglifyjs'); 
      cssnano = require('gulp-cssnano'), 
      rename = require('gulp-rename'); 
      del = require('del'); 
      autoprefixer = require('gulp-autoprefixer'); 

gulp.task('default', ['watch']);

gulp.task('sass', function () { 
    return gulp.src('app/sass/**/*.sass') 
        .pipe(sass()) 
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        })) 
        .pipe(gulp.dest('app/css')) 
        .pipe(browserSync.reload({
            stream: true
        })) 
});

gulp.task('browser-sync', function () { 
    browserSync({ 
        server: { 
            baseDir: 'app'
        },
        notify: false 
    });
});

gulp.task('scripts', function () {
    return gulp.src([ 
            'app/libs/jquery/dist/jquery.min.js', 
        ])
        .pipe(concat('libs.min.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest('app/js')); 
});

gulp.task('css-libs', ['sass'], function () {
    return gulp.src('app/css/*.css') 
        .pipe(cssnano()) 
        .pipe(rename({
            suffix: '.min'
        })) 
        .pipe(gulp.dest('app/css')); // move to fix
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload);  
});

gulp.task('clean', function () {
    return del.sync('dist'); // delete dist before prod
});

gulp.task('build', ['clean', 'sass', 'scripts'], function () {

    var buildCss = gulp.src([ // move libs to prod
            'app/css/main.css',
            'app/css/libs.min.css'
        ])
        .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // fonts
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*') // scripts
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // html
        .pipe(gulp.dest('dist'));

});