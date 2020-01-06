// 导入 npm run build 时压缩 gzip 包需要再 package.json 安装 "compression-webpack-plugin": "^3.0.1", 
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: './',
  lintOnSave: false, // 取消 eslint 代码检查
  productionSourceMap: false, // 关闭 sourceMap
  
  // gzip build 压缩
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 1024,
          deleteOriginalAssets: false
        })]
      }
    } else {
        // 开发环境
    }
  },
  
  // 本地 接口
  /* devServer: {
    proxy: {
      '/api':{
        target:'http://111.229.89.232:3000',
        ws: true,
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  } */
  /* devServer: {
      proxy: {
        'api/': {
        target: 'http://111.229.89.232:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'http://111.229.89.232:3000'
        }
  	  }
  	}
  }, */
}