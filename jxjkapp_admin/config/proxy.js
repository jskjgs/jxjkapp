module.exports =  {
  '/hospHealth': {
    target: 'http://182.92.78.118:9001',
    changeOrigin: true,
    // pathRewrite: {
    //   '^/admin': '/admin'
    // },
    // https
    secure: false
  }
}
