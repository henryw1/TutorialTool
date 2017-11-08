import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  answer: DS.attr('string'),
  //_id: DS.attr('string'),
//   poll: function() {
//    var _this = this;
//    Ember.run.later( function() {
//       _this.reload();
//       _this.poll();
//    }, 500);
// }.observes('didLoad'),

});
