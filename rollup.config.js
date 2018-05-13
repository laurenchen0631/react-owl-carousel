// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import path from 'path';

const isDev = process.env.NODE_ENV !== 'production';

const config = {
    input: path.resolve(__dirname, 'src/OwlCarousel.tsx'),
    treeshake: {
        pureExternalModules: true,
    },
    output: {
        name: 'ReactOwlCarousel',
        format: 'umd',
        file: path.resolve(__dirname, 'umd/OwlCarousel.js'),
        globals: {
            react: 'React',
            jquery: '$',
        }
    },
    external: ['react', 'jquery'],

    plugins: [
        typescript({
            typescript: require('typescript')
        }),
        resolve(),
        commonjs({
            include: /node_modules/
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ].concat()
}

if (!isDev) {
    config.output.file = path.resolve(__dirname, 'umd/OwlCarousel.min.js');
    config.plugins.push(uglify());
}

export default config;
