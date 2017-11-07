import Ember from 'ember';

export default Ember.Controller.extend({
  sesh: Ember.inject.service('session'),
// actions: {
//         save: function () {
//           debugger;
//           var _id = this.get("sesh").get('_id');
//           var token = this.get("key");
//
//           this.store.findRecord('lecturer',_id).then(function(lecturer) {
//             lecturer.get('session');  => "Rails is Omakase"
//             lecturer.set('session', token);
//             lecturer.save(); => PATCH to '/posts/1'
//           });
//
//         },
//
//     }
})
