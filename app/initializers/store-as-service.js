export function initialize(application) {
  application.inject('component', 'store', 'service:store');
}

export default {
  name: 'store-as-service',
  after: 'ember-data',
   initialize: function(container, application) {
    application.inject('service:mtg-level-service', 'store', 'store:main');
  }
};
