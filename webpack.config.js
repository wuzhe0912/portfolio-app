const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    // 打包後的檔案名稱
    filename: 'bundle.js',
    // 指定打包後輸出的位置
    path: __dirname + '/dist'
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
