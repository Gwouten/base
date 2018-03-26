const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
let reload = browserSync.reload;
const autoprefix = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const imageminGuetzli = require("imagemin-guetzli");
const uglify = require("gulp-uglify");

gulp.task("sass", function() {
  return gulp
    .src("css/**/*.scss")
    .pipe(sass())
    .pipe(autoprefix())
    .pipe(cleanCSS())
    .pipe(gulp.dest("css"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task("watch", ["browserSync", "sass"], function() {
  gulp.watch("css/**/*.scss", ["sass"]);
  gulp.watch("*.html", reload);
  gulp.watch("*.php", reload);
  gulp.watch("js/*.js", reload);
});

gulp.task("browserSync", function() {
  browserSync.init({
    proxy: "127.0.0.1:8010",
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task("imagemin", function() {
  gulp
    .src("img/**/*.{jpg,png,gif,svg,mp4}")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

gulp.task("package", ["sass", "imagemin"], function() {
  gulp.src("css/*.css").pipe(gulp.dest("dist/css"));
  gulp.src("js/*.js").pipe(gulp.dest("dist/js"));
  gulp.src("font").pipe(gulp.dest("dist/font"));
  gulp.src("**/*.{html,php,ico}").pipe(gulp.dest("dist"));
});
