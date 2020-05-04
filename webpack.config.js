const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin')

const copyPackageJson = () => ({
    entry: './src/index.js',
    output: {
        library: 'regira',
        libraryTarget: 'umd',
        filename: 'regira-modules.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: process.env.NODE_ENV,
    plugins: [
        // new CleanWebpackPlugin({
        //     verbose: true
        // }),
        new CopyPlugin([
            { from: './package.json', to: 'package.json' }
        ]),
        new htmlWebpackPlugin({
            filename: 'index.html'
        })
    ]
})
const createModule = (files, folder) => {
    const entry = files.reduce((entry, name) => {
        return {
            ...entry,
            [name]: `./src/${folder}/${name}.js`
        }
    }, {})
    const output = {
        //filename: '[name].min.js',
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/' + folder),
        //libraryTarget: 'commonjs2'
        libraryTarget: 'umd'
    }
    return {
        entry,
        output,
        devtool: "source-map",
        // optimization: {
        //     minimize: false
        // },
        mode: process.env.NODE_ENV,
        externals: {
            axios: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }
}


module.exports = [
    copyPackageJson(),
    // browser
    // createModule([
    //     "index"
    // ], "browser"),
    // entities
    createModule([
        "index",
        "entity-manager",
        "entity-service",
        "json-service"
    ], "entities"),
    // events
    createModule([
        "index",
        "event-handler",
        "event"
    ], "events"),
    // extensions
    createModule([
        "index",
        "array-extensions",
        "date-extensions",
        "promise-extensions"
    ], "extensions"),
    // firebase
    createModule([
        "index",
        "authentication-service",
        "authentication-utility",
        "communicator",
        "entity-service",
        "entity-utility"
    ], "firebase"),
    // identity
    createModule([
        "index",
        "identity-manager"
    ], "identity"),
    // io
    createModule([
        "index",
        "file-helper",
        "image-helper"
    ], "io"),
    // polyfills
    createModule([
        "index",
        "array-flat",
        "fetch",
        "object-from-entries",
        "url-search-params",
        "url"
    ], "polyfills"),
    // treelist
    createModule([
        "index",
        "tree-list",
        "tree-node",
        "tree-utility"
    ], "treelist"),
    // utilities
    createModule([
        "array-utility",
        "color-utility",
        "datetime-utility",
        "file-utility",
        "html-utility",
        "http-utility",
        "image-utility",
        "number-utility",
        "object-utility",
        "promise-utility",
        "string-utility",
        "webpack-utility"
    ], "utilities"),
    // vue/categories
    createModule([
        "index",
        "category-route-helper",
        "category-utility",
        "page-utility",
        "sitemap-generator"
    ], "vue/categories"),
    // vue/documents
    createModule([
        "index"
    ], "vue/documents"),
    // vue/generic-settings
    createModule([
        "index"
    ], "vue/generic-settings"),
    // vue/identity
    createModule([
        "index"
    ], "vue/identity"),
    // vue/multilanguage
    createModule([
        "index",
        "language-manager",
        "language-utility",
    ], "vue/multilanguage"),
    // vue/routing
    createModule([
        "index",
        "route-meta-tags-helper",
        "route-mixins-factory",
        "view-helper"
    ], "vue/routing")
]