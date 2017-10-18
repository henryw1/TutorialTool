import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service("session"),
  localdata: Ember.inject.service("localdata"),

actions:{
  authenticate(){
    var users = this.get("localdata").retrieve("users");
    //var content = this.get("localdata").retrieve("users");
    var session = this.get("session");
    var email = this.get("name");
    var password = this.get("password");
    var user =users.findBy('email', email);
    if (user && user.password === password)
    {
      //  var toast = this.get('toast');
      ///  toastr.success('Login Succesfull');

      session.set('isAuthenticated', true);
      session.set('user', user);
      this.get('router').transitionTo('index');
      //this.transitionToRoute('index');
        this.set("haserror", "");
    }else{
      this.controller.set("haserror", "has-error");
        }


  }
}
});
