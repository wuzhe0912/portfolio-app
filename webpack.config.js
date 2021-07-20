const path = require('path');
console.log(process.env.NODE_ENV);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
    about: './about.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),  // 指定打包後輸出的位置
    filename: '[name].js',                    // 打包後的檔案名稱
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        // 排除 node_modules 內的 css 無需編譯
        exclude: /node_modules/,
        include: /src/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 決定多少大小的圖片，改成 base64
            limit: 100
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
        include: /src/
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader']
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      filename: 'index.html',
      template: 'views/index.pug',
      chunks: ['index'],
      minify: {
        // 醜化 + 最小化
        sortAttributes: true,
        collapseWhitespace: true, // 摺疊空白字元
        collapseBooleanAttributes: true, // 摺疊布林值
        removeComments: true, // 移除註釋
        removeAttributeQuotes: true // 移除屬性的引號
      }
    })
  ],
  devServer: {
    contentBase: __dirname + '/dist', // server root folder
    host: 'localhost',
    port: 8081,
    open: true, // default open browser
    proxy: {
      "/api": {
        // target: "http://lemall.futurefe.com", // 已廢棄 api
        target: "",
        changeOrigin: true
      }
    },
    watchOptions: {
      poll: true,
    }
  }
}
