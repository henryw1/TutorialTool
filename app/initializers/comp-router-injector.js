export function initialize(application) {
   application.inject('component', 'router', 'router:main');
 }

 export default {
  name: 'comp-router-injector',
  initialize
};
