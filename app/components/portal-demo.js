  import Ember from 'ember';

  export default Ember.Component.extend({
      isSubmitted: false,
    haserror: false,
    actions:{
      submit(){
          var firstName = this.get("first_name");
        var lastName =this.get("last_name");
        var mail = this.get("email");
          var company =  this.get("Company");
          var phone = this.get("phone");

        if (firstName=== undefined || lastName===undefined ||mail===undefined || company===undefined )
        {
          this.set("haserror", "has-error");

        }else {

            var data = {
          firstName:firstName,
          lastName:lastName,
          mail:mail,
          company:company,
          phone:phone,
        };
        var that = this;
        var url = "/service.svc/SendEmail";
        Ember.$.ajax({
          type: "POST",
            url: url,
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType:'json',
            success: function () {
              that.set('isSubmitted', true);
              Ember.$(window).scrollTop(Ember.$('#requestDemo').offset().top);

          }
        });

      }

      }
    }

  });
