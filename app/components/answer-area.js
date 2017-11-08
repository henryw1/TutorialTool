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
          var student =this.get("stud");
          var name = this.get("sesh").get('user');
          var Cstudent = student.findBy('name', name);
          var id = Cstudent.id;
          var answer = this.get("answer");
          var store = this.get("store");
          store.findRecord('student',id).then(function(student) {
            student.get('answer');  //=> "Rails is Omakase"
            student.set('answer', answer);
            student.save(); //=> PATCH to '/posts/1'
          });

        }

    }
});
