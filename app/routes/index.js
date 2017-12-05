import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service("session"),
  model() {
    return Ember.RSVP.hash({
      student: this.store.findAll('student'),
      lecturer: this.store.findAll('lecturer'),
      question: this.store.findAll('question'),
      answer: this.store.findAll('answer')
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'student', model.student);
    Ember.set(controller, 'lecturer', model.lecturer);
    Ember.set(controller, 'question', model.question);
    Ember.set(controller, 'answer', model.answer);
    this.startRefreshing();
  },
  // setupController: function(controller, model){
  //   this._super(controller, model); // do the default implementation since I'm overriding this func
  //   this.startRefreshing();
  // },
  startRefreshing: function(){
    this.set('refreshing', true);
    Em.run.later(this, this.refresh, 30000);
  },
  refresh: function(){
    if(!this.get('refreshing'))
      return;
    this.store.findAll('student');
    this.store.findAll('lecturer');
    this.store.findAll('answer');
    this.store.findAll("question");
    Em.run.later(this, this.refresh, 30000);
  },
  actions:{
    willTransition: function(){
      this.set('refreshing', false);
    }
  }
});
