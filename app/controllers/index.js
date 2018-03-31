import Ember from 'ember';

export default Ember.Controller.extend({
  sesh: Ember.inject.service('session'),
  poll: Ember.inject.service(),
  store: Ember.inject.service(),
  stud: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('student');
  }).volatile(),
  afterModel: function(model, transition) {
    this.get('poll').setup({
      name: 'contactsPoll', // a poll name should be unique
      resource_name: 'students', // a resource name
      url: `http://localhost:4500/api/students/${student_id}` // url to fetch resource
    });
  },
  didInsertElement() {
  this._super(...arguments);
Ember.$('a.button1').on('click', function(){
Ember.$(' a.button1').toggleClass('active');
Ember.$(' .collapse1').toggleClass('collapse');
return false;
});
Ember.$('a.button2').on('click', function(){
Ember.$(' a.button2').toggleClass('active');
Ember.$(' .collapse2').toggleClass('collapse');
return false;
});
Ember.$('#expanda').on('click', function(){
  Ember.$('.ansa').removeClass('col-md-9');
  Ember.$('.ansa').toggleClass('col-md-12');
  Ember.$('#contracta').removeClass('hidden');
  Ember.$('#expanda').toggleClass('hidden');
});
Ember.$('#contract').on('click', function(){
  Ember.$('.ansa').toggleClass('col-md-9');
  Ember.$('.ansa').removeClass('col-md-12');
  Ember.$('#contracta').toggleClass('hidden');
  Ember.$('#expanda').removeClass('hidden');
});
Ember.$('.fab').hover(function () {
    //Ember.$(this).toggleClass('active');
});
Ember.$(function () {
  Ember.$('[data-toggle="tooltip"]').tooltip()
});
// Ember.$('#fontSizes').on("keyup",function() {
//
// 	    	Ember.$('#ansPar').css('font-size', Ember.$(this).val()+'px');
// 		});

},
  actions: {
    toLogin: function() {
      this.transitionToRoute('login');
    },
    all() {
      var session = this.get("sesh");
      if(session.nall === true){
        session.set("nall", false);
      }else{
        session.set("nall",true);
      }
    },
    ans: function(item) {
      var answer = item.get("answer");
      var sesh = this.get("sesh");
      sesh.set('answer', answer);
      var name = item.data.name + '\'s'
      sesh.set('name', name);
    },
    rmv: function(item) {
      var _id = item.id;
      var store = this.get("store");
      var student = this.get("stud");
      store.findRecord("student", _id).then(function(student) {
        student.destroyRecord();
      });
    },
    willTransition: function(transition) {
      this._super(transition);
      this.get('poll').removePoll('contactsPoll'); // remove the resource from polling
    },
    expand(){
      var session = this.get("sesh");
     var xpd = session.get("isFull");
     if(xpd === true){
       session.set("isFull", false);
     }else{
       session.set("isFull", true);
     }
   },
   logout(){
     this.transitionToRoute('/');
     var session = this.get("sesh");
     session.set("isAuthenticated", false);
     session.set("isLecturer", false);
     session.set("user", null);
     session.set("key", null);
     if(session.isStudent){
       // TODO: Delete
       var _id = session._id;
       var store = this.get("store");
       var student = this.get("stud");
       store.findRecord("student", _id).then(function(student) {
         student.destroyRecord();
       });
     }
     session.set("isStudent", false);
     this.transitionToRoute('index');
   }
  }
})
