import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service("session"),
  mongo: Ember.inject.service("mongo-db"),
  store: Ember.inject.service()




});
