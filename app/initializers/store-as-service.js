export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('component', 'store', 'service:store');
}

export default {
  name: 'store-as-service',
  after: 'ember-data',
   initialize: function(container, application) {
    application.inject('service:mtg-level-service', 'store', 'store:main');
  }
 //  initialize: function(container, application) {
 //   var store = container.lookup('store:main')
 //   container.register('service:store', store, { instantiate: false });
 // }

};
