import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service(),
  //mongo: Ember.inject.service('mongo-db'),
  lecturer: Ember.computed(function(){
  const store = this.get('store');
  return store.peekAll('lecturer');
}).volatile(),
actions:{
  authenticate() {
    //debugger;
    var sesh = this.get("session");
    var dat = this.get("lecturer");
    var email = this.get("name");
    var password = this.get("password");
    var content1 = dat.findBy('name', email);
    var content2 = dat.findBy('session', password);
    if (content1){
      var lecturer = content.data;
      if (lecturer.key === password){
        sesh.set('isAuthenticated', true);
         sesh.set('user', lecturer);
         this.get('router').transitionTo('index');
      }else{
        console.log("dont enter");
      }
    }else if (content2) {
      var key = content2.data;
      if(key.session === password){
        sesh.set('isAuthenticated', true);
        sesh.set('user', email);
        this.get('router').transitionTo('index');
      }else{
        console.log("dont enter");
      }

    }else{
      console.log("dont enter");
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
