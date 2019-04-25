//
// base_tamplate 
// Licensed under MIT Open Source
//

const folder = {
    root: './',
    workspace: 'app/',
    distribution: 'dist/',
    pkg: 'node_modules/'
};

module.exports = {
    workspace: {
        html: folder.workspace + 'templates/',
        scss: folder.workspace + 'scss/',
        svg: folder.workspace + 'svg/',
        js: {
            base: folder.workspace + 'js/',
            main: folder.workspace + 'js/main/',
            //vendor: folder.workspace + 'js/vendor/'
        }
    },
    distribution: {
        html: folder.root,
        scss: folder.distribution + 'css/',
        svg: folder.distribution + 'images/',
        js: {
            base: folder.distribution + 'js/',
            lib: folder.distribution + 'js/lib/'
        }
    },

    cssOptions: {
        browsers: [
            'last 2 versions',
            'ie >= 9',
            'android >= 4.4',
            'ios >= 7'
        ],
        flexbox: 'no-2009',
        msGridLayout: false,
        remUnit: true,
        replaceRemUnit: true,
        unitRemPrecision: 5,
        remPropList: [
            'font',
            'font-size',
            'line-height',
            'letter-spacing'
        ],
        remMediaQueries: false,
        outputName: 'styles',
        outputStyle: 'expanded',
        minify: true,
        optimizationMinify: true
    },

    jsOptions: {
        outputName: 'scripts'
    },

    svgOptions: {
        outputName: 'sprite',        
    },

    htmlOptions: {
        dataFilePath: folder.workspace + 'templates/data/global.json',
        // beautify: false,
        indentSize: 4,
        endWithNewline: false,
        minifyInline: true,
        outputExt: '.html'
    },

    cleanOptions: {
        generatedFiles: {
            html: folder.distribution + '*.html',
            css: folder.distribution + 'css/**/*.{css,map}',
            svg: folder.distribution + 'images/**/*.{svg,html}',
            js: folder.distribution + 'js/**/*.{js,map}'
        },
        dryRun: true,
        forceDelete: false,
        cleanAllGeneratedFiles: true,
        cleanFilesByType: () => {
            return this.generatedFiles.html;
        }
    }
};