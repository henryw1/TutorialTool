import Ember from 'ember';

export default Ember.Component.extend({
  sesh: Ember.inject.service('session'),
  store: Ember.inject.service(),
  toast: Ember.inject.service(),
  lect: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('lecturer');

  }).volatile(),
  stud: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('student');

  }).volatile(),
  ans: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('answer');

  }).volatile(),
  // lect: Ember.computed(function() {
  //   const store = this.get('store');
  //   return store.peekAll('lecturer');
  // }).volatile(),
actions: {
        save: function () {
            toastr.options={
              'progressBar':false,
            }
          var token = this.get("key");
          if (token === undefined || token ==="" ){
            toastr.warning('Error With session key');
            this.set("haserror", "has-error");
          }else{
          var sesh = this.get("sesh");
          var _id = sesh.get('_id');
          var oldtoken =  sesh.get("key");
          var student = this.get("stud").content;
          var store = this.get("store");
          for (var i = 0; i<student.length; i++){
            if (student[i]._data.session === oldtoken){
              var id = student[i].id;
              store.findRecord("student", id).then(function(student) {
                    student.destroyRecord();
              });
            }
          }

          var lecturer =this.get("lect");
          store.findRecord('lecturer',_id).then(function(lecturer) {
            lecturer.get('session');  //=> "Rails is Omakase"
            lecturer.set('session', token);
            lecturer.save(); //=> PATCH to '/posts/1'
          });
          sesh.set('key', token);
        }
        },
        reset: function() {
          var store = this.get("store");
          var sesh = this.get("sesh");
          var key = sesh.key;
          var student = this.get("stud").content;
          for (var i = 0; i<= student.length; i++){
            if(student[i]._data.session === key){
              var id = student[i].id;
              store.findRecord("student", id).then(function(student) {
                    student.destroyRecord();
              });
            }
          }

        }
    }
});
