import Ember from 'ember';

export default Ember.Component.extend({

  session: Ember.inject.service('session'),
    //mongo: Ember.inject.service("mongo-db"),
    groupedItems: Ember.computed('model', function() {
let pos = 0;
let result = [];
debugger;
while (pos < this.get('model.length')) {
  result.push(this.get('model').slice(pos, pos + 3));
  pos += 3;
}
return result;
}),

  actions:{
    save(){
  this.sendAction('action');
  }
 }
});
