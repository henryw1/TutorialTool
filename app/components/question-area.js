import Ember from 'ember';

export default Ember.Component.extend({
  sesh: Ember.inject.service('session'),
  store: Ember.inject.service(),
  lect: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('lecturer');

  }).volatile(),
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
