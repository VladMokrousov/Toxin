
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/"
};

module.exports = {

  externals: {
    paths: PATHS
  },

  entry: { 
   // main: PATHS.src,  //Заменяет ./src/index.js Webpack сам понимает, что ему нужно взять
    main: `${PATHS.src}/index.js`,
    forCards: `${PATHS.src}/forCards.js`,
    forLandingPage: `${PATHS.src}/forLandingPage.js`,
    forRegistration: `${PATHS.src}/forRegistration.js`,
    forSignIn: `${PATHS.src}/forSignIn.js`
  }, 

  output: {
    
    filename: `${PATHS.assets}js/[name].js`, // При использованиии [name] название берется из ключа объекта точки входа. Заменяет [name].js
    path: PATHS.dist, //Заменяет path.resolve(__dirname, './dist')
    publicPath: '/' //С этим параметром девсервер будет работать только при наличии файлов в папке dist 
  },
 optimization: {     //Для того, чтобы кешировать js библиотеки
  splitChunks: {
    cacheGroups: {
      vendor: {
        name: 'vendors',
        test: /node_modules/, //Библиотеки из node_modules, а также стандартный код webpack
        chunks: 'all',
        enforce: true
      }

    }
  }
 },
 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
       
      },
      {
        test: /\.pug$/,
        loader: "pug-loader"
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]'
        }
       
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]'
        }
       
      },
      
      {
        test: /\.scss$/,
        
        use:  [  
          'style-loader', 
          MiniCssExtractPlugin.loader, 
          { 
            loader: 'css-loader',
            options: { sourceMap: true } //Зачем?
          }, 
          { 
            loader: 'postcss-loader',
            options: { sourceMap: true, config: {path: `./postcss.config.js`} } //Зачем? Было path: `${PATHS.src}/js/config/postcss.config.js`
          }, 
          { 
            loader: 'sass-loader',
            options: { sourceMap: true } //Зачем?
          }
        ]
      },
      {
        test: /\.css$/,
        
        use:  [  
          'style-loader', 
          MiniCssExtractPlugin.loader, 
          { 
            loader: 'css-loader',
            options: { sourceMap: true } //Зачем?
          }, 
          { 
            loader: 'postcss-loader',
            options: { sourceMap: true, config: {path: `./postcss.config.js`} } //Зачем? Было path: `${PATHS.src}/js/config/postcss.config.js`
          }
        ]
      }
      
    ]
  },
  resolve: {
    alias: {
      '~': 'src' //Помогает сильно сократить запись пути в компонентах Vue, например
    }
  },
  plugins: [ 
    
    new CleanWebpackPlugin(),
    
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`, //style.css
      //chankFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
      {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`},
      {from: `${PATHS.src}/static`, to: ""}
  ]),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pug/pages/colors&type.pug`,
      filename: './colors&type.html',
      inject: false //Отключает автоматическую вставку тега link с css и тега script в главный html файл, который собирается в dist
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pug/pages/formElements.pug`,
      filename: './formElements.html',
      inject: false //Отключает автоматическую вставку тега link с css и тега script в главный html файл, который собирается в dist
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pug/pages/cards.pug`,
      filename: './cards.html',
      inject: false //Отключает автоматическую вставку тега link с css и тега script в главный html файл, который собирается в dist
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pug/pages/headers&footers.pug`,
      filename: './headers&footers.html',
      inject: false //Отключает автоматическую вставку тега link с css и тега script в главный html файл, который собирается в dist
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pug/pages/landing-page.pug`,
      filename: './landing-page.html',
      inject: false //Отключает автоматическую вставку тега link с css и тега script в главный html файл, который собирается в dist
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pug/pages/registration.pug`,
      filename: './registration.html',
      inject: false //Отключает автоматическую вставку тега link с css и тега script в главный html файл, который собирается в dist
    }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/pug/pages/sign-in.pug`,
      filename: './sign-in.html',
      inject: false //Отключает автоматическую вставку тега link с css и тега script в главный html файл, который собирается в dist
    })

  ]
};