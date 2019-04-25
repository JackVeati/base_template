//
// base_tamplate 
// Licensed under MIT Open Source
//

//configuration
import configs from '../gulpconfigs';

//plugin
import gulp from 'gulp';
import plumber from 'gulp-plumber';
// import gutil from 'gulp-util';
import log from 'fancy-log';
import colors from 'chalk';
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';

let svgSpriteOptions = {
  mode: {
    symbol: {
      render: {
        css: configs.svgOptions.cssRender,
        scss: configs.svgOptions.scssRender
      },
      dist: './',
      prefix: '.svg--%s',
      sprite: configs.svgOptions.outputName + '.svg',
      example: configs.svgOptions.exampleFile
    }
  }
};

let svgMinOptions = {
  js2svg: {
    pretty: true
  }
};

// // gulp.task('svg', function () {
//   async function svg () {
//       return gulp
//       .src(configs.workspace.svg + '**/*.svg')
//       .pipe(plumber())
//       .pipe(svgSprite(svgSpriteOptions))
//       .pipe(svgmin(svgMinOptions))
//       .pipe(gulp.dest(configs.distribution.svg))
//     //});
//   };
//    exports.svg = svg;

let { series } = require('gulp');

  function compileSvg() {
    return gulp
      .src(configs.workspace.svg + '*.svg')
      .pipe(buffer())
      .pipe($.rename(opt => {
        opt.basename = opt.basename.replace(new RegExp('_', 'g'), '-');
        return opt;
      }))
      .pipe($.svgsprite({
        mode: {
          symbol: {
            render: {
              css: false,
              scss: false
            },
            dest: './',
            prefix: '.svg--%s',
            sprite: 'sprite.svg',
            example: example
          }
        }
      }))
      .pipe(gulp.dest(configs.distribution.svg));
  }

  function minifySvg() {
    return gulp
      .src(configs.workspace.svg + '*.svg')
      .pipe($.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(gulp.dest(configs.workspace.svg));
  }

exports.svg = series(compileSvg, minifySvg);