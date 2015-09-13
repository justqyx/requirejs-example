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
  },
  
  //Remember: only use shim config for non-AMD scripts,
  //scripts that do not already call define(). The shim
  //config will not work correctly if used on AMD scripts,
  //in particular, the exports and init config will not
  //be triggered, and the deps config will be confusing
  //for those cases.
  shim: {
    'controllers/rails_conf': {
      exports: 'RailsConf'
    }
  }
});

require(['controllers/rails_conf', 'app'], function(RailsConf, app) {
  RailsConf.say();
  app.start();
});
