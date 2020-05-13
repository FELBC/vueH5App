const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  
  //github发布静态项目有子路径，配置到自己github reporsity地址 /vueH5App/
  publicPath: isProduction ? './' : '/', // TODO: Remember to change this to fit your need
  lintOnSave: !isProduction,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'', // 线上接口地址
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  productionSourceMap:isProduction ? false : true,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}
