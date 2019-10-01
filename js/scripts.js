(function ($) {
   'use strict';



   // Sticky Active Code ===================================================================

   $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
         $('.header-area-lit, .header-area-drk').addClass('sticky');
         $('.expoled').addClass('nosha');
      } else {
         $('.header-area-lit, .header-area-drk').removeClass('sticky');
         $('.expoled').removeClass('nosha');
      }
   });


   $('#free_quote_btn').on('click', (e) => {
      e.preventDefault()
      var sliderAmount = $('#slider_output').val()
      var sliderIntended = $('#intended_use').val()
      $('#to_finance').val(sliderAmount)
      $('#int_use').val(sliderIntended)
      $('#free_qut_section').removeClass('d-none')
      $('#main_section').addClass('d-none')
      $('html, body').animate({ scrollTop: $("#free_qut_section").offset().top - 100 })
   })

   $('#get_free_qut').on('click', (e) => {
      e.preventDefault()
      $('#free_qut_section').removeClass('d-none')
      $('#main_section').addClass('d-none')
      $('html, body').animate({ scrollTop: $("#free_qut_section").offset().top - 100 })
   })

   var slider = document.getElementById("myRange");
   var output = document.getElementById("slider_output");
   var output2 = document.getElementById("slider_out2");
   var value1 = null
   var value2 = null
   output.value = `$${slider.value}`;
   output2.textContent = Math.ceil(output.value.substr(1) / 51)

   slider.oninput = function () {
      // console.log(this.value)
      switch (this.value.length) {
         case 5:
            value1 = this.value.substr(0, 2) + "," + this.value.substr(2)
            break;
         case 6:
            value1 = this.value.substr(0, 3) + "," + this.value.substr(3)
            break;
         case 7:
            value1 = this.value.substr(0, 1) + "," + this.value.substr(1, 3) + "," + this.value.substr(4)
            break;
         default:
            value1 = this.value
      }
      output.value = `$${value1}`;
      let bt = (Math.ceil(this.value / 51)).toString()
      switch (bt.length) {
         case 4:
            value2 = bt.substr(0, 1) + "," + bt.substr(1)
            break;
         case 5:
            value2 = bt.substr(0, 2) + "," + bt.substr(2)
            break;
         case 6:
            value2 = bt.substr(0, 1) + "," + bt.substr(1, 3) + "," + bt.substr(4)
            break;
         default:
            value2 = bt
      }
      output2.textContent = value2
   }


   // Welcome Slider Active Code ===================================================================

   // $(".main-slide").owlCarousel({
   //    nav: false, // Show next and prev buttons
   //    slideSpeed: 100,
   //    paginationSpeed: 100,
   //    singleItem: true,
   //    loop: true,
   //    dot: false,
   //    autoPlay: true,
   //    responsive: {
   //       0: {
   //          items: 1
   //       },
   //       600: {
   //          items: 1
   //       },
   //       1000: {
   //          items: 1
   //       }
   //    }
   // });


   //Gallery Slider ================================================================================

   $(".gallery-slide").owlCarousel({
      smartSpeed: 450,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      margin: 5,
      bullet: false,
      responsive: {
         0: {
            items: 2
         },
         480: {
            items: 2
         },
         800: {
            items: 3
         },
         900: {
            items: 4
         },
         1000: {
            items: 5
         },
         1200: {
            items: 6
         },
         1400: {
            items: 7
         }
      }
   });


   //Review Slider =================================================================================

   $(".review-slider").owlCarousel({
      nav: false, // Show next and prev buttons
      slideSpeed: 500,
      singleItem: true,
      paginationSpeed: 400,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 2
         }
      }
   });




   // Partner Slider Active Code ===================================================================

   $(".partner-slide").owlCarousel({
      smartSpeed: 450,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      margin: 5,
      bullet: false,
      responsive: {
         0: {
            items: 1
         },
         450: {
            items: 2
         },
         600: {
            items: 3
         },
         800: {
            items: 3
         },
         900: {
            items: 4
         },
         1000: {
            items: 5
         }
      }
   });


   // Mobile Menu  =================================================================================

   $('#nav').slicknav({
      label: '',
      closeOnClick: true,
      prependTo: '#mobile-menu '
   });




   //Timer  ========================================================================================

   $('.counter').counterUp({
      time: 2000
   });


   // Preloader active code  ==============================================================================

   $(window).on('load', function () {
      $('body').css('overflow-y', 'visible');
      $('#preloader').fadeOut('slow', function () {
         $(this).remove();
      });
   });



   // Active Menu Js  ==============================================================================

   var elm = document.querySelector('#header');
   var ms = new MenuSpy(elm);



   // WOW Js  ====================================================================================
   new WOW().init();


   // Smoth Scroll  ================================================================================

   // Smoth Scroll
   smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
      selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      offset: 70, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
      callback: function (anchor, toggle) { } // Function to run after scrolling
   });


})(jQuery);