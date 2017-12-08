import Ember from 'ember';

export default Ember.Controller.extend({
  sesh: Ember.inject.service('session'),
  poll: Ember.inject.service(),
  store: Ember.inject.service(),
  stud: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('student');
  }).volatile(),
  afterModel: function (model, transition) {
    this.get('poll').setup({
      name: 'contactsPoll', // a poll name should be unique
      resource_name: 'students', // a resource name
      url: `http://localhost:4500/api/students/${student_id}` // url to fetch resource
    });
    },
    didInsertElement(){
    this._super(...arguments);
    Ember.$(function() {
    Ember.$(".expand").on( "click", function() {
      Ember.$(this).next().slideToggle(200);
      var expand = Ember.$(this).find(">:first-child");
  debugger;
      if(expand.text() == "+") {
        expand.text("X");
      } else {
        expand.text("+");
      }
    });
  });
  },


actions: {
        toLogin: function () {
          this.transitionToRoute('login');
},
  ans: function(item){
    var answer = item.get("answer");
    var sesh = this.get("sesh");
    sesh.set('answer', answer);
  },
  rmv: function(item){
    debugger;
    var _id = item.id;
    var store = this.get("store");
    var student = this.get("stud");
    store.findRecord("student", _id).then(function(student){
      student.destroyRecord();
    });

  },
  willTransition: function (transition) {
    this._super(transition);
    this.get('poll').removePoll('contactsPoll'); // remove the resource from polling
  },
    }
})
