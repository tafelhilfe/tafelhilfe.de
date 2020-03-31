//import {VueLoaderPlugin} from "vue-loader";
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    img: 'src/assets/images',
                    image: 'xlink:href',
                    'b-avatar': 'src/assets/images',
                    'b-img': 'src',
                    'b-img-lazy': ['src/assets/images', 'blank-src'],
                    'b-card': 'img-src',
                    'b-card-img': 'src/assets/images',
                    'b-card-img-lazy': ['src/assets/images', 'blank-src'],
                    'b-carousel-slide': 'img-src',
                    'b-embed': 'src/assets/images'
                }

                return options
            })
        config.module
            .rule('compileCss')
            .test(/\.scss$/)
            .use('sass-compiler')
                .loader('sass-loader')
                .options({
                    indentedSyntax: true,
                    // sass-loader version >= 8
                    sassOptions: {
                        indentedSyntax: true
                    }
                })
        css: {
            requireModuleExtension: false
        }
    },

}




/*const vueLoaderPlugin = require('vue-loader/lib/plugin')

const options = {
    transformAssetUrls: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-avatar': 'src',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
    }
}
module.exports = {
    module: {
        configureWebpack: {
            options: options,
            plugins: [
                // make sure to include the plugin!
                new VueLoaderPlugin()
            ]
        },
module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true,
                            // sass-loader version >= 8
                            sassOptions: {
                                indentedSyntax: true
                            }
                        }
                    }
                ]
            }
        ]
    }
    },

}*/