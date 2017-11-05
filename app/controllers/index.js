import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
actions: {
        save: function () {
          debugger;
            var student = this.store.createRecord('student', {
                name: this.get('titulo'),
                answer: this.get('contenido'),
            });
            student.save();
        }
    }
})
