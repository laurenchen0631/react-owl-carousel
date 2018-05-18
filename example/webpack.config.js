const path = require('path');
const webpack = require('webpack');
const os = require('os');

const localIP = (() => {
    const ifaces = os.networkInterfaces();
    for (const device of Object.keys(ifaces)) {
        for (const iface of ifaces[device]) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                continue;
            }
            return iface.address;
        }
    }
    return 'localhost';
})();

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    target: 'web',

    entry: {
        bundle: path.join(__dirname, './index.tsx'),
    },

    resolve: {
        symlinks: true,
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },

    output: {
        path: '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js',
    },

    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           'window.jQuery': "jquery",
           jQuery: "jquery"
        })
    ],

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, './index.tsx'),
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, '../src'),
                ],
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: path.resolve(__dirname, './tsconfig.json'),
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: path.resolve(__dirname, './postcss.config.js'),
                            },
                        },
                    },
                ],
            },
            {
				test: /\.png$/,
				use: 'file-loader',
			},
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    performance: {
        hints: false,
    },
    devServer: {
        contentBase: [
            path.resolve(__dirname, './'),
        ],
        host: '0.0.0.0',
        port: 8080,
        allowedHosts: [
            localIP,
        ],
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        historyApiFallback: true,
        compress: true,
    },
};
