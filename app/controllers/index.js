import Ember from 'ember';

export default Ember.Controller.extend({
  sesh: Ember.inject.service('session'),
  poll: Ember.inject.service(),

  afterModel: function (model, transition) {
    this.get('poll').setup({
      name: 'contactsPoll', // a poll name should be unique
      resource_name: 'students', // a resource name
      url: `http://localhost:4500/api/students/${student_id}` // url to fetch resource
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
  willTransition: function (transition) {
    this._super(transition);
    this.get('poll').removePoll('contactsPoll'); // remove the resource from polling
  },
    }
})
