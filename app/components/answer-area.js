import Ember from 'ember';

export default Ember.Component.extend({
  sesh: Ember.inject.service('session'),
  store: Ember.inject.service(),
  stud: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('student');
  }).volatile(),
  ans: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('answer');
  }).volatile(),
  lect: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('lecturer');
  }).volatile(),
  //var that =  Ember.$(this)
  didInsertElement() {
    this._super(...arguments);
    Ember.$('#radioBtn a').on('click', function() {
      var sel = Ember.$(this).data('title');
      var tog = Ember.$(this).data('toggle');
      Ember.$('#' + tog).prop('value', sel);

      Ember.$('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
      Ember.$('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
    })
  },

  actions: {
    answer: function() {
      debugger;
      var session = this.get("sesh");
      var lecturer = this.get("lect").findBy("session", session.key);
      var lecID = lecturer.id;
      var question = lecturer.get("question");
      var student = this.get("stud");
      var name = this.get("sesh").get('user');
      var Cstudent = student.findBy('name', name);
      var id = Cstudent.id;
      var newanswer = this.get("answer");
      var store = this.get("store");
      var answer = this.get("ans");
      if (newanswer) {
        store.findRecord('student', id).then(function(student) {
          student.get('answer'); //=> "Rails is Omakase"
          student.set('answer', newanswer);
          student.save(); //=> PATCH to '/posts/1'
        });
        var Nanswer = store.createRecord('answer', {
          question: question,
          student: id,
          answer: newanswer,
          lecturer: lecID,
        });
        Nanswer.save();
        toastr.success("Answer submitted");
      } else {
        toastr.warning("Answwer must be provided");
      }
    }

  }
});
