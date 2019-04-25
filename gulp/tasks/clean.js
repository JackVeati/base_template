//
// base_tamplate 
// Licensed under MIT Open Source
//

//configuration
import configs from '../gulpconfigs';

//plugin
import gulp from 'gulp';
import del from 'del';
import log from 'fancy-log';
import colors from 'chalk';


// variable
let localfiles = null;


if (configs.cleanOptions.cleanAllGeneratedFiles) {
    let vals = Object.keys(configs.cleanOptions.generatedFiles).map(key => {
        return configs.cleanOptions.generatedFiles[key];
    });
    localfiles = vals.toString().split(/,(?=[^}]*(?:{|$))/);
} else {
    localfiles = configs.cleanOptions.cleanFilesByType();
}


function clean() {
    return del(localfiles, {
        dryRun: configs.cleanOptions.dryRun,
        force: configs.cleanOptions.forceDelete
    }).then(paths => {
        if (configs.cleanOptions.dryRun) {
            if (paths.length > 0) {
                log(`Files and/or folders that would be deleted:\n
                ${colors.yellow(paths.join('\n').trim())}`);
            } else {
                log(colors.yellow('Nothing will be deleted'));
            }
        } else {
            if (paths.length > 0) {
                log(`Files and/or folders deleted:\n
                ${colors.red(paths.join('\n'))}`);
            } else {
                log(colors.green('Nothing to delete'));
            }
        }
    })
}

exports.clean = clean;