import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  localdata: Ember.inject.service("localdata"),
  actions: {
    register() {
      var localdata = this.get("localdata");
      var session = this.get("session");
      var users = localdata.retrieve("users");
      var email = this.get("email");
      var name = this.get("email");
      var password = this.get("password");
      var newuser = {
        'name': name,
        'email': email,
        'password': password
      };
      var user = users.findBy('email', email);
      if (user) {
        session.set('userExists', true);
      } else {
        users.addObject(newuser);
        session.set('isAuthenticated', true);
        session.set('user', user);
        localdata.update("users", users);
        this.transitionTo('submit');
      }
    },
    login() {
      var cred = this.getProperties('name', 'password');
      var users = this.get("localdata").retrieve("users");
      var session = this.get("session");
      var email = this.get("email");
      var password = this.get("password");
      session.authenticate('name', 'password');
      var user = users.findBy('email', email);
      if (user && user.password === password) {
        session.set('isAuthenticated', true);
        session.set('user', user);
        console.log("");
      } else {
        console.log("");
      }
    }
  }

});
