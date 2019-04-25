
//configuration
import configs from './gulp/gulpconfigs';

// import requireDir from 'require-dir';
// requireDir('./tasks', {recurse: true});

import gulp from 'gulp';
import scssTask from './gulp/tasks/scss';
import bundleTask from './gulp/tasks/bundle';
import htmlTask from './gulp/tasks/html';
import cleanTask from './gulp/tasks/clean';
import svgTask from './gulp/tasks/svg';

function watchFiles() {
  gulp.watch(configs.workspace.scss + '**/*.s+(a|c)ss', scssTask.scss);
  gulp.watch(configs.workspace.js + '**/*.js', bundleTask.bundle);
  gulp.watch(configs.workspace.html + '**/*.html', htmlTask.html);
  // Other watchers
};


// define complex tasks
let build = gulp.series(
  cleanTask.clean,
  gulp.parallel(
    bundleTask.bundle,
    scssTask.scss,
    htmlTask.html,
   // svgTask.svg
  ),
  watchFiles
);


// export tasks
exports.clean = cleanTask;
exports.js = bundleTask.bundle;
exports.css = scssTask.scss;
exports.html = htmlTask.html;
// exports.svg = svgTask;
exports.watch = watchFiles;
exports.default = build;