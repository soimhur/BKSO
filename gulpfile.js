// Import `gulp` from node_modules/gulp
var gulp = require("gulp");

// Define default task
gulp.task("default", function() {
    gulp.src(
      ["src/custom.css"]
    )
    .pipe(concat("style.css"))
    .pipe(gulp.dest("public"))
})