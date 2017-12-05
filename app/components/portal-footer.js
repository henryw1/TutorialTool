import Ember from 'ember';
import SessionService from 'ember-simple-auth/services/session';

export default Ember.Component.extend({
  // tagName:'footer',
  // classNames:['text-center'],
  session: Ember.inject.service(),
  //session: Ember.inject.service("session"),
  localdata: Ember.inject.service("localdata"),
  actions: {
    register() {
      var localdata = this.get("localdata");
      var session = this.get("session");
      debugger;
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
        //alert("user exists");
      } else {
        //alert("no user");
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
      debugger;
      //var content = this.get("localdata").retrieve("users");
      var session = this.get("session");
      debugger;
      var email = this.get("email");
      var password = this.get("password");
      session.authenticate('name', 'password');
      var user = users.findBy('email', email);
      if (user && user.password === password) {
        //  var toast = this.get('toast');
        //  toastr.success('Login Succesfull');
        session.set('isAuthenticated', true);
        session.set('user', user);
        //  this.transitionTo('submit');
        //  this.controller.set("haserror", "");
        console.log("logged in true");
      } else {
        console.log("Problem loggin in");
        //  this.controller.set("haserror", "has-error");
      }
    }
  }

});
