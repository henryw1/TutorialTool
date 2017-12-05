import Ember from 'ember';


export default Ember.Route.extend({
  session: Ember.inject.service("session"),
  model() {
    return Ember.RSVP.hash({
      student: this.store.findAll('student'),
      lecturer: this.store.findAll('lecturer'),
      question: this.store.findAll('question'),
      answer: this.store.findAll('answer')

    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'student', model.student);
    Ember.set(controller, 'lecturer', model.lecturer);
    Ember.set(controller,'question', model.question);
    Ember.set(controller, 'answer', model.answer);
  }
});
