// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
// import resolve from 'rollup-plugin-node-resolve';
import path from 'path';

export default {
    input: path.resolve(__dirname, 'src/OwlCarousel.tsx'),
    treeshake: {
        pureExternalModules: true,
    },
    output: {
        name: 'ReactOwlCarousel',
        format: 'umd',
        globals: {
          react: 'React',
        //   jquery: '$',
        }
    },
    external: ['react', '$'],

    plugins: [
        typescript({
            typescript: require('typescript')
        }),
        // resolve(),
        commonjs({
            include: /node_modules/
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}
