import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  session: DS.attr('string'),
  key: DS.attr('string'),
  question: DS.attr('string'),
  _id: DS.attr('string'),
});
