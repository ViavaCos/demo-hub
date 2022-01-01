const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const pkgName = require('./package.json').name

module.exports = {
  mode: 'development',
  devServer: {
    // 重点: 设置端口号
    port: 3001
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
      name: 'remote_repo',

      // 打包后的文件名称，默认值为 名称.js
      // 比如这里就是 remote_repo.js
      filename: 'remoteEntry.js',

      // 向外暴露的模块
      exposes: {
        './add': '@/utils/add.js',
        './getPassTime': '@/utils/getPassTime.js'
      },

      // 标记哪些远程加载模块优先使用自己(host)的依赖，没有再使用remote的
      shared: {
        losstime: {
          import: 'losstime',
          singleton: true,
          eager: true // 开启即时消费
        }
      }
    })
  ]
}