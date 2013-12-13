define(
[
  'jquery',
  'underscore',
  'backbone',
  'scripts/views/index',
  'scripts/views/about',
  'scripts/views/lyrics',
  'scripts/views/header'
],
function($, _, Backbone, IndexView, AboutView, LyricsView, HeaderView) {
  var App = {};

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
    },

    showLyrics: function() {
      var lyricsView = new LyricsView();
      lyricsView.render();
    }
  });

  App.initialize = function() {
    var router = new Router();
    Backbone.history.start({ pushState: true });

    var headerView = new HeaderView();
    headerView.render();
    headerView.on('navigate:home', function() {
      router.navigate('/', { trigger: true });
    });
    headerView.on('navigate:about', function() {
      router.navigate('/about', { trigger: true });
    });
    headerView.on('navigate:lyrics', function() {
      router.navigate('/lyrics', { trigger: true });
    });
  };

  return App;
});
