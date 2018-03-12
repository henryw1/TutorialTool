// import Ember from 'ember';
// export default Ember.Component.extend({
//  classNames: ['carousel', 'slide', 'carousel-fade', 'top'],
//  tagName: 'a',
//   attributeBindings: ['url:href'],
//
//   didInsertElement() {
//     this._super(...arguments);
//     var height= screen.height - 100;
//     Ember.$(".top").height(height);
//     Ember.$("#myCarousel").height(height);
//     var slider = this.$().carousel({
//     keyboard: true,
//     interval: 5000,
//      });
//      slider.on("touchstart", function(event){
//
//         var yClick = event.originalEvent.touches[0].pageX;
//     	Ember.$(this).one("touchmove", function(event){
//         var yMove = event.originalEvent.touches[0].pageX;
//         if( Math.floor(yClick - yMove) > 1 ){
//           Ember.$(".carousel").carousel('next');
//         }
//         else if( Math.floor(yClick - yMove) < -1 ){
//             Ember.$(".carousel").carousel('prev');
//         }
//     });
//     Ember.$(".carousel").on("touchend", function(){
//             Ember.$(this).off("touchmove");
//     });
// });
//
//   }
// });
