const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',     // 打包後的檔案名稱
    path: __dirname + '/dist', // 指定打包後輸出的位置
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
        // 排除 node_modules 內的 css 無需編譯
        exclude: /node_modules/,
        include: /src/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/,
        include: /src/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    contentBase: __dirname + '/dist', // server root folder
    host: 'localhost',
    port: 8081,
    hot: true,  // hot reload
    open: true, // default open browser
    proxy: {
      "/api": {
        // target: "http://lemall.futurefe.com", // 已廢棄 api
        target: "",
        changeOrigin: true
      }
    }
  }
}
