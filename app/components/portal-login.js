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
      var store = this.get("store");
      var sesh = this.get("session");
      var dat = this.get("lect");
      var name = this.get("name");
      var password = this.get("password");
      var lecturer = dat.findBy('name', name);
      var student = dat.findBy('session', password);
      if (lecturer) {
        var lecturer = lecturer.data;
        if (lecturer.key === password) {
          sesh.set('isAuthenticated', true);
          sesh.set('user', name);
          this.get('router').transitionTo('index');
        } else {
          console.log("");
        }
      } else if (student) {
        var key = student.data;
        if (key.session === password) {
          sesh.set('isAuthenticated', true);
          sesh.set('user', name);
          sesh.set('key', key.session);
          var newstudent = store.createRecord('student', {
            name: name,
                      });
          newstudent.save();
          this.get('router').transitionTo('index');
        } else {
          console.log("");
        }

      } else {
        console.log("");
      }
    },
  }

});
