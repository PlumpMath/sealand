define(
[
  'jquery',
  'underscore',
  'backbone',
  'text!scripts/templates/header.html',
  'scripts/app'
],
function($, _, Backbone, headerTemplate, App) {
  var HeaderView = Backbone.View.extend({
    el: $('header'),
    template: headerTemplate,

    events: {
      'click .home': 'navigateHome',
      'click .about': 'navigateAbout',
      'click .lyrics': 'navigateLyrics'
    },

    navigateHome: function(e) {
      e.preventDefault();
      this.trigger('navigate:home');
    },

    navigateAbout: function(e) {
      e.preventDefault();
      this.trigger('navigate:about');
    },

    navigateLyrics: function(e) {
      e.preventDefault();
      this.trigger('navigate:lyrics');
    },

    render: function() {
      this.$el.html(this.template);

      return this;
    }
  });

  return HeaderView;
});
