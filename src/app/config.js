const config = {
  'localhost': {
    apiRoot: '//localhost:8080',
    imagesRoot: '//localhost:8080/images',
    stripeKey: 'pk_test_LXjcXNa8WrI6BGfO97NLE5MI'
  },

  'liftupnepal.com': {
    apiRoot: '//api.liftupnepal.com',
    imagesRoot: '//api.liftupnepal.com/images',
    stripeKey: 'pk_live_ckG50jcW2G7WkvmYZy0Dfyfn'
  }
}

export default config[window.location.hostname]
