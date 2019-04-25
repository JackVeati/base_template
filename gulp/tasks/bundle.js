//
// base_tamplate 
// Licensed under MIT Open Source
//

//configuration
import configs from '../gulpconfigs';

//plugin
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';

function bundle() {
  return gulp
    .src(configs.workspace.js.base + '**/*.js') // Get source files with gulp.src
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat(configs.jsOptions.outputName + '.js'))
    .pipe(gulp.dest(configs.distribution.js.base))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(configs.distribution.js.base))
}

exports.bundle = bundle;