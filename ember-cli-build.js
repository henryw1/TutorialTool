/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    origin: '',
    fingerprint: {
      enabled: false
    },
    SRI:{
      enabled:false
    },
  //   minifyJS: {
  //     enabled: true
  // },
// minifyCSS: {
//   enabled: true
// }
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  //
  app.import('vendor/jquery.easing.min.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/font-awesome/css/font-awesome.css');
  app.import('vendor/scrollreveal/scrollreveal.js');
  app.import('vendor/magnific-popup/jquery.magnific-popup.js');
    app.import('vendor/toastr/toastr.scss');
    app.import('vendor/toastr/toastr.js');


  var fontawesome = new funnel('bower_components/font-awesome/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });
  //
  var bootstrap = new funnel('bower_components/bootstrap/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });
  //
  var merged = mergeTrees([app.toTree(), fontawesome, bootstrap], {
      overwrite: true
  });




  return app.toTree(merged);
};
