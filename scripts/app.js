define(
[
  'jquery',
  'underscore',
  'backbone',
  'scripts/views/index',
  'scripts/views/about',
  'scripts/views/header'
],
function($, _, Backbone, IndexView, AboutView, HeaderView) {
  var App = {};
  _.extend(App, Backbone.Events);

  var Router = Backbone.Router.extend({
    routes: {
      '': 'showIndex',
      'about': 'showAbout',
      'lyrics': 'showLyrics'
    },

    showIndex: function() {
      var indexView = new IndexView();
      indexView.render();
    },

    showAbout: function() {
      var aboutView = new AboutView();
      aboutView.render();
    }
  });

  App.initialize = function() {
    var router = new Router();
    Backbone.history.start({ pushState: true });

    var headerView = new HeaderView();
    headerView.render();

    App.on('navigateHome', function() {
      router.navigate('home');
    });

    App.on('navigateAbout', function() {
      router.navigate('about');
    });
  };

  return App;
});
