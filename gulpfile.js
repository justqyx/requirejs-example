var pkg = require('./package')
  , gulp = require('gulp')
  , connect = require('gulp-connect');


gulp.task('server', function() {
  connect.server({
    root: './',
    hostname: 'localhost',
    port: pkg.config.port,
    middleware: function(conn, port) {
      return [
        conn().use('/assets/stylesheets', conn.static('./stylesheets')),
        conn().use('/assets/javascripts', conn.static('./javascripts')),
        conn.static('./')
      ];
    }
  });
});

gulp.task('default', ['server']);
