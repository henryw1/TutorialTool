import Ember from 'ember';

export default Ember.Component.extend({
  sesh: Ember.inject.service('session'),
  store: Ember.inject.service(),
  stud: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('student');
  }).volatile(),
actions: {
        answer: function () {
          debugger;
          var name = this.get("sesh").get('user');
          var answer = this.get("answer");
          var student =this.get("stud");
          var store = this.get("store");
          store.queryRecord('student',{name:student}).then(function(student) {
            student.get('answer');  //=> "Rails is Omakase"
            student.set('answer', answer);
            student.save(); //=> PATCH to '/posts/1'
          });

        }

    }
});
