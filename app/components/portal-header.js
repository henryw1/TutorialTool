import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['top'],
  // tagName:'heander',
  didInsertElement() {
    this._super(...arguments);
    var height= screen.height - 100;
    Ember.$(".top").height(height);
    Ember.$('[data-toggle="offcanvas"]').click(function(){
       Ember.$("#navigation").toggleClass("hidden-xs");
   });
  }

});
