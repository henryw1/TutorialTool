import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  //localdata: Ember.inject.service("localdata"),

actions:{
  authenticate() {
    // debugger;
    var sesh = this.get("session");
      let { identification, password } = this.getProperties('identification', 'password');
      sesh.authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
      if(sesh.session.isAuthenticated){
        this.get('router').transitionTo('index');
      }
    }
  // authenticate(){
  //   var users = this.get("localdata").retrieve("users");
  //   var content = this.get("localdata").retrieve("users");
  //   var session = this.get("session");
  //   var email = this.get("name");
  //   var password = this.get("password");
  //   var user =users.findBy('email', email);
  //   if (user && user.password === password)
  //   {
  //
  //     session.set('isAuthenticated', true);
  //     session.set('user', user);
  //     this.get('router').transitionTo('index');
  //   this.transitionToRoute('index');
  //       this.set("haserror", "");
  //   }else{
  //     this.controller.set("haserror", "has-error");
  //       }
  //
  //
  // }
}
});
