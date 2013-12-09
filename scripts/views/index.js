define(
['jquery', 'underscore', 'backbone', 'text!scripts/templates/index.html'],
function($, _, Backbone, indexTemplate) {
  var IndexView = Backbone.View.extend({
    el: $('.content'),
    template: indexTemplate,

    render: function() {
      this.$el.html(this.template);

      return this;
    }
  });

  return IndexView;
});
