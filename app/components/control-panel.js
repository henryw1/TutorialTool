import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions:{
    save(){
      debugger;
      var seh = this.get('session');
      var key = this.get("key");

    }
  }
});
