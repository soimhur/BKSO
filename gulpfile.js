var gulp = require("gulp");

//import gulp libraries
var concat = require("gulp-concat");

//define config
var config = {
  vendor: "node_modules/"
}

//build css task
gulp.task("build-css", function() {
    gulp.src(
      [
        "src/custom.css"
      ]
    )
    .pipe(concat("style.css"))
    .pipe(gulp.dest("public"))
})

//build js task
gulp.task("build-js", function() {
  gulp.src(
    [
      config.vendor + "jquery/dist/jquery.js",
      "src/custom.js"
    ]
  )
  .pipe(concat("style.js"))
  .pipe(gulp.dest("public"))
})

//concatenate gulp tasks
gulp.task("default", ["build-css", "build-js"]);