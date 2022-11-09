const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack")

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
        args[0].title = '浩浩云'
        return args
    })},
  	// 配置插件参数
    configureWebpack: {
      plugins: [
        // 配置 jQuery 插件的参数
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default']
        })
      ]
    },
    devServer: {
      hot: true,
      https: false,
      port: 8080,
      proxy: {
        // 匹配到/localApi开头时 替换成target指定的地址
        '/api': {
          // 本地
          // target: process.env.VUE_APP_BASE_API_URL,
          target: 'http://localhost:10087',
          changeOrigin: true,
          pathRewrite: {
            // 把匹配到的/localApi这段开头 替换成 /
            '^/api': '/'
          }
        },  
      }
    },
})
