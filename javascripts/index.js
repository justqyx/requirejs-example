require.config({
  baseUrl: 'assets/javascripts',
  // set up the locations of group scripts
  // 对应的路径为：baseUrl + paths
  // 但以下三种情况除外
  // - Ends in '.js'
  // - Starts with a '/'
  // - Contains an URL protocol like 'http:' or 'https:'
  paths: {
    // 'test': 'vender/test.js'
  }
});

require(['app'], function(app) {
  app.start();
});
