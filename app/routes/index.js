import Ember from 'ember';
//import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
// import AuthenticateRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
  model: function() {
    //debugger;
return this.store.findAll('note');
}
});
// import Ember from 'ember';
//
// export default Ember.Route.extend({
// 	model: function() {
// 		return this.store.findAll('note');
// 	}
// });
