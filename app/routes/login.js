import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      student: this.store.findAll('student'),
      lecturer: this.store.findAll('lecturer')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'student', model.student);
    Ember.set(controller, 'lecturer', model.lecturer);
  }
});
