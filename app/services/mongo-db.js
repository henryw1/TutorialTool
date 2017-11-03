import Ember from 'ember';
//import DS from 'ember-data';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  isAuthenticated: false,
  user:null,
  userExists:false,
  submission:null,
  users:null,

 //  init() {
 //   this._super(...arguments);
 //   this.get("store").findAll('note').then((note) => {
 //     this.set('users', note);
 //     console.log(users);
 //   })
 //
 //
 // },

     getUser() {
        return this.get("store").peekAll('note');
        //  prom.then ((note) =>{
        //   this.set('users', note);
        // });
        // return users;

    }
});
