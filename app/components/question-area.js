import Ember from 'ember';

export default Ember.Component.extend({
  sesh: Ember.inject.service('session'),
  store: Ember.inject.service(),
  quest: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('question');

  }).volatile(),
  stud: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('student');

  }).volatile(),
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
Ember.$('.fab').hover(function () {
    //Ember.$(this).toggleClass('active');
});
Ember.$(function () {
  Ember.$('[data-toggle="tooltip"]').tooltip()
});

Ember.$('#fontSize').on("keyup",function() {

	    	Ember.$('#question').css('font-size', Ember.$(this).val()+'px');
		});
},
actions: {
        NewQuestion: function () {
          debugger;
          toastr.options={
            'progressBar':false,
          }
          var _id = this.get("sesh").get('_id');
          var newquestion = this.get("question");
          var title = this.get("title");
          var question = this.get("quest")
          var lecturer =this.get("sesh").get('user');
          var student = this.get("stud");
          var store = this.get("store");
          if (title && newquestion){
            var q = this.get("quest").content;
            var index = 0;
            var newtitle = title;
              for (var i = 0; i < q.length; i++){
                if(q[i].__data.title === newtitle){
                index = index + 1;
                newtitle = title + "-0" + index;
                i=0;
              }
              }
          var newQ = store.createRecord('question', {
            title: newtitle,
            lecturer:lecturer,
            question:newquestion,
          });
          newQ.save();
          store.findRecord('lecturer', _id).then(function(lecturer){
            // debugger;
            lecturer.get("question");
            lecturer.get("title");
            lecturer.set("question", newquestion);
            lecturer.set("title", title);
            lecturer.save();
          });
          toastr.success("Question added");
        }else{
          toastr.warning("question title and question must be added")
        }
        },
         size(output){
           // debugger;
           var fsize = this.get("rangeSuccess");
         }


    }
});
