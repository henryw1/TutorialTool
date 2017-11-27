import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  lecturer: DS.attr('string'),
  question: DS.attr('string'),
//  _id: DS.attr('string'),
});
