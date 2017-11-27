import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  poll: Ember.inject.service(),
afterModel: function () {
  this._super(...arguments);
  this.get('poll').start({
    idle_timeout: 10000,
    interval: 20000,
  });
}
});

Router.map(function() {
   this.route('login', { path: '/' });
   this.route('index', { path: '/home' });
  this.route('login', function() {
        this.route('/#', {path: 'home'});
  });
});
export default Router;
