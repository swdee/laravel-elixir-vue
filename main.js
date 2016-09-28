var Elixir = require('laravel-elixir');

Elixir.ready(function() {
    Elixir.webpack.mergeConfig({
        // ensure we are using the version of Vue that supports templates
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            }
        },
        // use buble loader since it is the default in Elixir
        vue: {
            loaders: {
                js: 'buble-loader'
            }
        },        
        babel: {
            presets: ['es2015'],
            plugins: ['add-module-exports', 'transform-runtime'],
        },
        module: {
            loaders: [
                {
                    // use vue-loader for *.vue files
                    test: /\.vue$/,
                    loader: 'vue'
                },
                {
                    // use babel-loader for *.js files
                    test: /\.js$/,
                    loader: 'babel',
                    // important: exclude files in node_modules
                    // otherwise it's going to be really slow!
                    exclude: /node_modules/
                }
            ]
        }
    });
});
