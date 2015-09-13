define([
  'controllers/1',
  'controllers/2'
], function(v1, v2) {
  console.info("value-1: " + v1);
  console.info("value-1: " + v2);

  var app = {
    start: function() {
      console.info("start app");
    }
  };

  return app;
});
