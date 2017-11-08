import Ember from 'ember';

export default Ember.Component.extend({
  sesh: Ember.inject.service('session'),
  store: Ember.inject.service(),
  lect: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('lecturer');

  }).volatile(),
  //classNames: ['btn', 'btn-lg', 'btn-circle'],
  //tagName: 'a',
  //  attributeBindings: ['url:href'],
  didInsertElement() {
    this._super(...arguments);
  Ember.$('a.button1').on('click', function(){
Ember.$(' a.button1').toggleClass('active');
Ember.$(' .collapse1').toggleClass('collapse');

return false;
});
Ember.$('a.button2').on('click', function(){
Ember.$(' a.button2').toggleClass('active');
Ember.$(' .collapse2').toggleClass('collapse');

return false;
});
Ember.$('.fab').hover(function () {
    //Ember.$(this).toggleClass('active');
});
Ember.$(function () {
  Ember.$('[data-toggle="tooltip"]').tooltip()
})


},
actions: {
        NewQuestion: function () {
          debugger;
          var _id = this.get("sesh").get('_id');
          var question = this.get("question");
          var lecturer =this.get("lect");
          var store = this.get("store");
          store.findRecord('lecturer',_id).then(function(lecturer) {
            lecturer.get('question');  //=> "Rails is Omakase"
            lecturer.set('question', question);
            lecturer.save(); //=> PATCH to '/posts/1'
          });

        }

    }
});
