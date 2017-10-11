import Ember from 'ember';

export default Ember.Service.extend({

  retrieve(key){
    var strdata = localStorage.getItem(key);
    if (strdata)
    {
      var data = JSON.parse(strdata);
      return data;
    }
    return [];
  },
  update(key,array){
    var strdata = JSON.stringify(array);
    localStorage.setItem(key, strdata);

  }

});
