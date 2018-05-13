// var postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {
            browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
            ],
            warnForDuplicates: false,
            flexbox: 'no-2009',
        },
        'cssnano': {},
    },
};
