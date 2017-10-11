import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(){
    Ember.run.scheduleOnce('afterRender', this, function(){
      // Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function() {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        //event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // var that = this;
    // jQuery(window).on('resize', function(){
    //   Ember.run(function(){
    //     that.handleResize('null');
    //     // $(window).off('resize', this.get('boundResizeHandler')
    //     console.log($(window).height());
    //   });
    // });

  // $(window).height()


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });



    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    $(document).ready(function(){
         $(window).scroll(function () {
                if ($(this).scrollTop() > 500) {
                     $('#back-to-top').fadeIn();
                    $('#portfolioModal2').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
                    window.sr = ScrollReveal();
            sr.reveal('.sr-icons', {
                duration: 600,
                scale: 0.3,
                distance: '0px'
            }, 200);
            sr.reveal('.sr-button', {
                duration: 1000,
                delay: 200
            });
            sr.reveal('.sr-cards', {
                duration: 600,
                scale: 0.3,
                distance: '0px'
            }, 300);
            $('.popup-gallery').magnificPopup({
              delegate: 'a',
              type: 'image',
              tLoading: 'Loading image #%curr%...',
              mainClass: 'mfp-img-mobile',
              gallery: {
                  enabled: true,
                  navigateByImgClick: true,
                  preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
              },
              image: {
                  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
              }
          });

            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('#back-to-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

            $('#back-to-top').tooltip('show');

    }); //end^^


})(Ember.$); // End of use strict

    });
  }
});
