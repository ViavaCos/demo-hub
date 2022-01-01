const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const pkgName = require('./package.json').name

module.exports = {
  mode: 'development',
  devServer: {
    // 重点: 设置端口号
    port: 3002,
  },
  resolve: {
    // 非重点: 添加路径别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    // 非重点: 自动引入打包后js文件
    new HtmlWebpackPlugin({
      title: pkgName,
      template: './public/index.html'
    }),

    // 重点: 模块联邦
    new ModuleFederationPlugin({
      // 名称（需要符合js变量命名规范）
      name: 'host_repo',

      // 引用的远程仓库 (即: 要消费哪些仓库)
      remotes: {
        'remote-repo': 'remote_repo@http://127.0.0.1:3001/remoteEntry.js'
      }
    })
  ]
}