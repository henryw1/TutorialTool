import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
  this._super(...arguments);
  Ember.$(function() {
  Ember.$(".expand").on( "click", function() {
    Ember.$(this).next().slideToggle(200);
    var expand = Ember.$(this).find(">:first-child");

    if(expand.text() == "+") {
      expand.text("X");
    } else {
      expand.text("+");
    }
  });
});
},

});
