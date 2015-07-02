const config = {
  'localhost': {
    apiRoot: '//localhost:8080',
    imagesRoot: '//localhost:8080/images'
  },

  'educate.surge.sh': {
    apiRoot: '//188.166.94.30:8080',
    imagesRoot: '//188.166.94.30:8080/images'
  }
}

export default config[window.location.hostname]
