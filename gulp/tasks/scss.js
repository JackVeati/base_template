//
// base_tamplate 
// Licensed under MIT Open Source
//

//configuration
import configs from '../gulpconfigs';

//plugin
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import pxtorem from 'postcss-pxtorem-plus';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';


const processors = [
  autoprefixer({
    browsers: configs.cssOptions.browsers,
    flexbox: configs.cssOptions.flexbox,
    grid: configs.cssOptions.msGridLayout
  }),
  pxtorem({
    replace: configs.cssOptions.replaceRemUnit,
    unitPrecision: configs.cssOptions.unitRemPrecision,
    propList: configs.cssOptions.remPropList,
    mediaQuery: configs.cssOptions.remMediaQueries
  })
];

if (!configs.cssOptions.remUnit) {
  processors.splice(1, 1);
}


function scss() {
  return gulp
    .src(configs.workspace.scss + '**/*.s+(a|c)ss') // Get source files with gulp.src
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: configs.cssOptions.outputStyle
    }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(configs.distribution.scss))
    .pipe(cleanCSS({
      level: (configs.cssOptions.minify) ? 2 : 1
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(configs.distribution.scss))
}

exports.scss = scss;