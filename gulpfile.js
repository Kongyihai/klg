/**
 * Created by shc@lierda.com on 2016/6/25.
 */

var IS_DEV = 1;//1开发版;0生产发布

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    gutil = require("gulp-util"),
    autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat"),
    rev = require("gulp-rev-append"),
    gulpCopy = require('gulp-file-copy'),
    htmlmin = require('gulp-htmlmin'),
    del =  require('del'),
    fileinclude  = require('gulp-file-include'),
    webpack = require("webpack");


gulp.task('runOnce', function(callback) {
    runSequence('del',
        ['runLess', 'webpack'],
        'revHtml',
        callback);
});

gulp.task('watch', function() {
    gulp.watch(['src/css/*.less'],['runLess']);
    gulp.watch(['src/components/*.js','src/widget/*.js','src/tools/*js','src/main/*js'],['webpack']);
    gulp.watch(['src/view/*.html'],['revHtml']);
});

gulp.task('runLess', function() {
    if(IS_DEV){
        gulp.src([ 'src/css/*.less'])
            .pipe(concat('index.css'))
            .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
            .pipe(less())
            .pipe(autoprefixer('last 2 version', 'safari 5',"ie 6", "ie 7",'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 2'))
            .pipe(gulp.dest('web/public/css'));


    }else{
        gulp.src([ 'src/css/*.less'])
            .pipe(concat('index.css'))
            .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
            .pipe(less())
            .pipe(autoprefixer('last 2 version', 'safari 5',"ie 6", "ie 7",'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 2'))
            .pipe(gulp.dest('web/public/css'));

    }
});

gulp.task('revHtml', function() {
    gulp.run(['copy','version']);
});


gulp.task("copy",function(){
    gulp.src('src/view/*.html')
        .pipe(gulp.dest('web/public/'));
});
gulp.task("del",function(){
    del(['web/public/index.html*','web/public/js/index.js*','web/public/css/index.css*']);
});
gulp.task("version",function(){
    if(IS_DEV){
        gulp.src('web/public/index.html')
            .pipe(rev())
            .pipe(gulp.dest('web/public/'));


    }else {
        var options = {
            collapseWhitespace:true,
            collapseBooleanAttributes:true,
            removeComments:true,
            removeEmptyAttributes:true,
            removeScriptTypeAttributes:true,
            removeStyleLinkTypeAttributes:true,
            minifyJS:true,
            minifyCSS:true
        };
        gulp.src('web/public/index.html')
            .pipe(rev())
            .pipe(gulp.dest('web/public/'));

    }
});
gulp.task("webpack", function(callback) {
    var wb_config = IS_DEV ? "./webpack.config.js" : "./webpack.config.release.js";
    var webpackConfig = require(wb_config);
    var myConfig = Object.create(webpackConfig);
    webpack(
        myConfig
        , function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
            }));
            callback();
        });
});



