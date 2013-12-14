require.config({
  baseUrl: '../',

  paths: {
    'jquery': 'lib/jquery-1.10.2.min',
    'underscore': 'lib/underscore-min',
    'backbone': 'lib/backbone-min',
    'fixtures': 'lib/backbone-fixtures',
    'text': 'lib/text'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    fixtures: {
      deps: ['backbone'],
      exports: 'Fixtures'
    }
  }
});

require(['scripts/app'], function(App) {
  App.initialize();
});
