import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service(),
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
      debugger;
      var store = this.get("store");
      var sesh = this.get("session");
      var dat = this.get("lect");
      var email = this.get("name");
      var password = this.get("password");
      var lecturer = dat.findBy('name', email);
      var student = dat.findBy('session', password);
      if (lecturer) {
        var lecturer = lecturer.data;
        if (lecturer.key === password) {
          sesh.set('isAuthenticated', true);
          debugger;
          sesh.set('user', email);
          this.get('router').transitionTo('index');
        } else {
          console.log("dont enter");
        }
      } else if (student) {
        var key = student.data;
        if (key.session === password) {
          sesh.set('isAuthenticated', true);
          sesh.set('user', email);
          var newstudent = store.createRecord('student', {
            name: email,
            answer: " ",
          });
          newstudent.save();
          this.get('router').transitionTo('index');
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
