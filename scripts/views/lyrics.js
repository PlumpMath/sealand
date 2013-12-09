define(
['jquery', 'underscore', 'backbone', 'text!scripts/templates/lyrics.html'],
function($, _, Backbone, lyricsTemplate) {
  var LyricsView = Backbone.View.extend({
    el: $('.content'),
    template: lyricsTemplate,

    render: function() {
      this.$el.html(this.template);

      return this;
    }
  });

  return LyricsView;
});
