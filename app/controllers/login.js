import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service(),
  toast: Ember.inject.service(),
  // toast:Ember.inject.service(),
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
      toastr.options={
        'progressBar':false,
      }
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
          session.set('key', lecturer.session);
          session.set('isLecturer', true);
          session.set('isAuthenticated', true);
          session.set('user', email);
          session.set('_id', lecturer._id)
          var toast = this.get('toast');
          toastr.success('Login Succesfull');
          this.transitionToRoute('index');
        } else {
          this.set("haserror", "has-error");
          toastr.warning('Login Error');
        }
      } else if (student1) {
        var stud = this.get("stud").content;
        var index = 0;
        var newname = email;
          for (var i = 0; i < stud.length; i++){
            if(stud[i].__data.name === newname){
            index = index + 1;
            newname = email + "-0" + index;
            i=0;
          }
          }
        var key = student1.data;
        if (key.session === password) {
          session.set('isStudent',true);
          session.set('isAuthenticated', true);
          session.set('user', newname);
          session.set('key', key.session);
          var student = this.store.createRecord('student', {
            name: newname,
            answer: " ",
            newans: " ",
            session: password,
          });
          student.save();
          this.transitionToRoute('index');
        } else {
          this.set("haserror", "has-error");
          toastr.warning('Login Error');
                  }
      } else {
        this.set("haserror", "has-error");
        toastr.warning('Login Error');
      }
    },

  }

});
