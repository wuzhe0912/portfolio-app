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
          'css-loader'
        ],
        // 排除 node_modules 內的 css 無需編譯
        exclude: /node_modules/,
        include: /src/
      }
    ]
  }
}
