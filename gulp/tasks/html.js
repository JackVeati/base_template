//
// base_tamplate 
// Licensed under MIT Open Source
//

//configuration
import configs from '../gulpconfigs';

//plugin
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import log from 'fancy-log';
import colors from 'chalk';
import fs from 'fs';
import path from 'path';
import htmlBeautify from 'gulp-html-beautify';
import nunjucksRender from 'gulp-nunjucks-render';
import htmlclean from 'gulp-htmlclean';



function html() {
    return gulp
        .src(configs.workspace.html + '*.+(html|nunjucks|njk)')
        .pipe(plumber())
        .pipe(nunjucksRender({
            path: [configs.workspace.html],
            data: JSON.parse(fs.readFileSync(path.resolve(configs.htmlOptions.dataFilePath), 'utf8')),
            ext: configs.htmlOptions.outputExt
        })).on('error', err => {
            log('Error in: ' + colors.red(err.plugin));
            log('Message: ' + colors.red(err.message));
            log('File: ' + colors.red(err.fileName));

        })
        .pipe(htmlclean())
        .pipe(htmlBeautify({
            indent_size: configs.htmlOptions.indentSize,
            end_with_newline: configs.htmlOptions.endWithNewLine,
        }))

        .pipe(gulp.dest(configs.distribution.html));
}

exports.html = html;