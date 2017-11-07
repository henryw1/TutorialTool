import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  answer: DS.attr('string'),
  //_id: DS.attr('string'),

});
