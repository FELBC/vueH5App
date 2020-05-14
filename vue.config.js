const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  //github发布静态项目有子路径，配置到自己github reporsity地址 /vueH5App/
  publicPath: isProduction ? './' : '/', // TODO: Remember to change this to fit your need
  lintOnSave: !isProduction, 
  configureWebpack: {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'), //简化引用路径
            'styles':resolve('src/assets/styles')
        }
    }
  },
  // devServer:{
  //   host:'localhost',
  //   port:8080,
  //   proxy:{
  //     '/api':{
  //       target:'localhost', // 线上接口地址
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '/api':''
  //       }
  //     }
  //   }
  // },
  productionSourceMap:isProduction ? false : true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}
