import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service(),
  //mongo: Ember.inject.service('mongo-db'),
  lect: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('lecturer');

  }).volatile(),
  stud: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('student');

  }).volatile(),

  actions: {
    authenticate() {
      //var store = this.get("store");
      var session = this.get("session");
      var dat = this.get("lect");
      var email = this.get("name");
      var password = this.get("password");
      var lecturer = dat.findBy('name', email);
      var student1 = dat.findBy('session', password);
      if (lecturer) {
        var lecturer = lecturer.data;
        if (lecturer.key === password) {
          session.set('isLecturer', true);
          session.set('isAuthenticated', true);
          session.set('user', lecturer);
          //this.get('router').transitionTo('index');
          this.transitionToRoute('index');
        } else {
          console.log("dont enter");
        }
      } else if (student1) {
        var key = student1.data;
        if (key.session === password) {
          session.set('isAuthenticated', true);
          session.set('user', email);
          var student = this.store.createRecord('student', {
            name: email,
            answer: " ",
          });
          student.save();
          this.transitionToRoute('index');
        } else {
          console.log("dont enter");
        }
      } else {
        console.log("dont enter");
      }
    },
    // save:() {
    //   debugger;
    //   var student = this.store.createRecord('student', {
    //     name: email,
    //     answer: " ",
    //   });
    //   student.save();
    // }
  }

});
