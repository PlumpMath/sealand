define(
['jquery', 'underscore', 'backbone', 'text!scripts/templates/about.html'],
function($, _, Backbone, aboutTemplate) {
  var AboutView = Backbone.View.extend({
    el: $('.content'),
    template: aboutTemplate,

    render: function() {
      this.$el.html(this.template);
    }
  });

  return AboutView;
});
