import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  isAuthenticated: false,
  user:null,
  _id:null,
  isLecturer:false,
isStudent:false,
answer:null,
key:null,
isFull:true,
nall:true,
name:null,
});
