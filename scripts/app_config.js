require.config({
  baseUrl: '../',

  paths: {
    'jquery': 'lib/jquery-1.10.2.min',
    'underscore': 'lib/underscore-min',
    'backbone': 'lib/backbone-min',
    'text': 'lib/text'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require(['scripts/app'], function(App) {
  App.initialize();
});
