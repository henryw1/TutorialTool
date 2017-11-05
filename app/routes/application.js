import Ember from 'ember';
//import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
//import AuthenticateRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
  session: Ember.inject.service("session"),
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
