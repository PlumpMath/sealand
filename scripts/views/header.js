define(
['jquery', 'underscore', 'backbone', 'text!scripts/templates/header.html'],
function($, _, Backbone, headerTemplate) {
  var HeaderView = Backbone.View.extend({
    el: $('header'),
    template: headerTemplate,

    initialize: function() {
      _.extend(this, Backbone.Events);
    },

    events: {
      'click .about': 'naviateAbout',
      'click .home': 'navigateHome'
    },

    navigateAbout: function() {
      console.log('about');
      this.trigger('navigateAbout');
    },

    navigateHome: function() {
      console.log('home');
      this.trigger('navigateHome');
    },

    render: function() {
      this.$el.html(this.template);
      this.delegateEvents();

      return this;
    }
  });

  return HeaderView;
});
