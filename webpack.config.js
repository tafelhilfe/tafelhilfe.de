const path = require('path')
module.exports = {
  resolve: {
    // for IDE (WebStorm, PyCharm, etc)
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '~': path.resolve(__dirname, 'src/')
    }
  }
}
