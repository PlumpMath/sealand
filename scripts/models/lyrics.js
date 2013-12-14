define(
['jquery', 'underscore', 'backbone'],
function($, _, Backbone) {
  var LyricsModel = Backbone.Model.extend({
    useFixtures: true,
    fixture: 'scripts/models/lyrics',
    fixtureType: 'json',

    initialize: function() {
      this.deferred = this.fetch();
    }
  });

  return LyricsModel;
});
