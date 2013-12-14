define(
['jquery', 'underscore', 'backbone', 'text!scripts/templates/lyrics.html'],
function($, _, Backbone, lyricsTemplate) {
  var LyricsView = Backbone.View.extend({
    el: $('.content'),
    template: _.template(lyricsTemplate),

    initialize: function() {
      this.model.deferred.done(function() {
        this.render();
      }.bind(this));
    },

    render: function() {
      var songs = this.model.get('songs');

      this.$el.html(this.template({ songs: songs }));

      return this;
    }
  });

  return LyricsView;
});
