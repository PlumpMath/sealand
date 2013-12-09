(function() {
  'use strict';

  window.App = {} || App;
  
  /**
   * @constructor
   * App index view
   */
  App.IndexView = Backbone.View.extend({
    el: $('.content'),
    template: '<div>Lords of Sealand is the Best</div>',
    render: function() {
      this.$el.html(_.template(this.template));

      return this;
    }
  });

  /**
   * @constructor
   * App header
   */
  App.HeaderView = Backbone.View.extend({
    el: $('header'),
    template: '<nav><ul class="nav-links">' +
      '<li class="nav-li"><a href="/">home</a></li>' +
      '<li class="nav-li"><a href="/about">about</a></li>' +
      '<li class="nav-li"><a href="/lyrics">lyrics</a></li>' +
      '</ul></nav>',
    render: function() {
      this.$el.html(_.template(this.template));

      return this;
    }
  });

  /**
   * @constructor
   * App footer
   */
  App.FooterView = Backbone.View.extend({
    el: $('footer'),
    template: '<h2>here be a footer</h2>',

    render: function() {
      this.$el.html(_.template(this.template));

      return this;
    }
    
  });

  App.LyricsView = Backbone.View.extend({
    el: $('.content'),

    template: '<% _.each(lyrics, function(lyric) {' +
      '%><li><%-lyric.title %></li><li><%- lyric.content %></li><%' +
    '}) %>',
    
    initialize: function() { 
      this.collection = [
        {
          title: 'ryan rocks',
          content: 'asdf'
        }, 
        {
          title: 'kristina',
          content: 'something nice'
        }
      ];
    },

    render: function() {
      this.$el.html(_.template(this.template, { lyrics: this.collection }));
    }
  });

  App.data = [ 
    {
      title: 'sailing song',
      content: 'sailing song sailing song sailing song arg'
    },
    {
      title: 'wanderer',
      content: 'wandering man wanders with wanderlust'
    }
  ];
  
  App.Lyrics = Backbone.Model.extend({
    
  });

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'about': 'about',
      'shows': 'shows',
      'lyrics': 'lyrics'
    },

    /* render the index view */
    index: function() {
      var indexView = new App.IndexView();
      indexView.render();
    }, 
 
    about: function() {
      
    },

    shows: function() {

    },

    lyrics: function() {
      var lyricsView = new App.LyricsView();
      lyricsView.render();
    }
  });

  App.init = function() {
    var router = new App.Router();
    Backbone.history.start({ pushState: true });
    /* render the header */
    var headerView = new App.HeaderView();
    headerView.render();
    /* render the footer */
    var footerView = new App.FooterView();
    footerView.render();
  };

  

  /* run that shit */
  App.init();

}());
