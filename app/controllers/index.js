import Ember from 'ember';

export default Ember.Controller.extend({
  sesh: Ember.inject.service('session'),
actions: {
        save: function () {
          debugger;

          var user = this.get("sesh").get('user');
          var token = this.get("key");

          this.store.queryRecord('lecturer', {name:user}).then(function(lecturer) {
            lecturer.get('session'); // => "Rails is Omakase"

            lecturer.set('session', token);
            lecturer.save(); // => PATCH to '/posts/1'
});
          // debugger;
          //   var student = this.store.createRecord('student', {
          //       name: this.get('titulo'),
          //       answer: this.get('contenido'),
          //   });
          //   student.save();
        }
    }
})
