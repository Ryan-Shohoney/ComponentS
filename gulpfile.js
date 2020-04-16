const { 
  src, 
  dest,
  series,
  parallel 
} = require('gulp'), 
babel = require('gulp-babel'),
browserSync = require('browser-sync')
del = require('del');

exports.build = series(babelJS);
exports.server = series(clean, parallel(babelJS, copyLocal), serve)

function serve () {
  return browserSync.init({
    server: {
      baseDir: './dist',
    }
  });
}

function babelJS (){
  return src('./src/*.js')
    .pipe(babel())
    .pipe(dest('./dist'));
}

function copyLocal () {
  return src('./src/*.html')
    .pipe(dest('./dist'));
}

function clean () {
  return del('./dist');
}