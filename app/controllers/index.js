import Ember from 'ember';

export default Ember.Controller.extend({
  sesh: Ember.inject.service('session'),
actions: {
        toLogin: function () {
          this.transitionToRoute('login');
}
    }
})
