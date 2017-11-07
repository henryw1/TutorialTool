import Ember from 'ember';

export default Ember.Component.extend({
  sesh: Ember.inject.service('session'),
  store: Ember.inject.service(),
  lect: Ember.computed(function() {
    const store = this.get('store');
    return store.peekAll('lecturer');

  }).volatile(),
actions: {
        save: function () {
          debugger;

          var _id = this.get("sesh").get('_id');
          var token = this.get("key");
          var lecturer =this.get("lect");
          var store = this.get("store");
          store.findRecord('lecturer',_id).then(function(lecturer) {
            lecturer.get('session');  //=> "Rails is Omakase"
            lecturer.set('session', token);
            lecturer.save(); //=> PATCH to '/posts/1'
          });

        }

    }
});
