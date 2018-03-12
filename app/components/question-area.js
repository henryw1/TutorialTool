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
//  classNames: ['slider', 'slide', 'carousel-fade', 'top'],
  didInsertElement() {
    this._super(...arguments);
    Ember.$('a.button1').on('click', function() {
      Ember.$(' a.button1').toggleClass('active');
      Ember.$(' .collapse1').toggleClass('collapse');
      return false;
    });
    Ember.$('a.button2').on('click', function() {
      Ember.$(' a.button2').toggleClass('active');
      Ember.$(' .collapse2').toggleClass('collapse');
      return false;
    });
    Ember.$('#expand').on('click', function() {
      Ember.$('.qarea').removeClass('col-lg-9');
      Ember.$('.qarea').toggleClass('col-lg-12');
      Ember.$('.ansa').removeClass('col-lg-9');
      //Ember.$('.ansa').removeClass('col-md-offset-3');
      Ember.$('.ansa').toggleClass('col-lg-12');

      Ember.$('#contract').removeClass('hidden');
      Ember.$('#expand').toggleClass('hidden');
    });
    Ember.$('#contract').on('click', function() {
      Ember.$('.qarea').toggleClass('col-lg-9');
      Ember.$('.qarea').removeClass('col-lg-12');
      Ember.$('.ansa').toggleClass('col-lg-9');
      Ember.$('.ansa').removeClass('col-lg-12');
      //Ember.$('.ansa').toggleClass('col-md-offset-3');
      Ember.$('#contract').toggleClass('hidden');
      Ember.$('#expand').removeClass('hidden');
    });
    Ember.$('.fab').hover(function() {
      //Ember.$(this).toggleClass('active');
    });
    // Ember.$(function() {
    //   Ember.$('[data-toggle="tooltip"]').tooltip()
    // });
    Ember.$('#fontSize').on("keyup", function() {
      Ember.$('#question').css('font-size', Ember.$(this).val() + 'px');
    });

    Ember.$(document).ready(function() {
          var slider = Ember.$("#slider").slider({
              animate: true,
              value:1,
              min: 0,
              max: 200,
              step: 10,
              slide: function(event, ui) {
                debugger
                  update(1,ui.value);
              }
          });

          //Added, set initial value.
           Ember.$("#fontSize").val(18);
          // Ember.$("#duration").val(0);
          // Ember.$("#amount-label").text(0);
          // Ember.$("#duration-label").text(0);
          //
          update();
      });


      //changed. now with parameter
       function update(slider,val) {
         debugger;
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1?val:Ember.$("#fontSize").val();
        var $duration = slider == 2?val:Ember.$("#duration").val();

        /* commented
        $amount = $( "#slider" ).slider( "value" );
        $duration = $( "#slider2" ).slider( "value" );
                 */

        // $total = "$" + ($amount * $duration);
        Ember.$('#question').css('#slider', $amount + 'px');
          Ember.$( "#fontSize" ).val($amount);
         Ember.$( "#fontSize" ).text($amount);
         // Ember.$( "#duration" ).val($duration);
         // Ember.$( "#duration-label" ).text($duration);
         // Ember.$( "#total" ).val($total);
         // Ember.$( "#total-label" ).text($total);

         Ember.$('#slider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
         //Ember.$('#slider2 a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+$duration+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
      }

  },
  actions: {
    NewQuestion: function() {
      var session = this.get("sesh");
      toastr.options = {
        'progressBar': false,
      }
      var _id = session.get('_id');
      var newquestion = this.get("question");
      var title = this.get("title");
      var question = this.get("quest")
      var lecturer = session.get('user');
      var student = this.get("stud");
      var store = this.get("store");
      if (title && newquestion) {
        var q = this.get("quest").content;
        var index = 0;
        var newtitle = title;
        for (var i = 0; i < q.length; i++) {
          if (q[i].__data.title === newtitle) {
            index = index + 1;
            newtitle = title + "-0" + index;
            i = 0;
          }
        }
        var newQ = store.createRecord('question', {
          title: newtitle,
          lecturer: lecturer,
          question: newquestion,
        });
        newQ.save();
        store.findRecord('lecturer', _id).then(function(lecturer) {
          // debugger;
          lecturer.get("question");
          lecturer.get("title");
          lecturer.set("question", newquestion);
          lecturer.set("title", title);
          lecturer.save();
        });
        toastr.success("Question added");
      } else {
        toastr.warning("question title and question must be added")
      }
    },
    size(output) {
      // debugger;
      var fsize = this.get("rangeSuccess");
    },
    expand() {
      var session = this.get("sesh");
      var xpd = session.get("isFull");
      if (xpd === true) {
        session.set("isFull", false);
      } else {
        session.set("isFull", true);
      }
    }


  }
});
