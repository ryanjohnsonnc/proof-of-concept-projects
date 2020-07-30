/* ==========================================================================
   Document Ready
   ========================================================================== */

   jQuery(document).ready(function($){
  
    $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      conrols: false,
      arrows: false,
      slidesToShow: 6,
      centerMode: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      touchMove: false,
      swipeToSlide: false,
      // focusOnSelect: true,
      autoplay: true,
    });

    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var slideData =  currentSlide + 1;
      var phoneScreens = $('.screen');
      var movement1 = Math.floor(Math.random() * 61) + 50 + "%";
      var movement2 = Math.floor(Math.random() * 61) + 50 + "%";
      var movement = movement1 + " " + movement2;
      phoneScreens.removeClass('active');
      $('.screen--' + slideData).addClass('active'); 
      
      $('.phone-screen').css("background-position", movement );
      $('.background-map').css("background-position", movement );
   });

    // $('.slider').flickity({
    //   // options
    //   cellAlign: 'center',
    //   contain: false,
    //   draggable: true,
    //   wrapAround: true,
    //   autoPlay: false,
    //   prevNextButtons: false,
    //   pageDots: false,
    //   percentPosition: false,
    // });
  });
    
  
  /* ==========================================================================
     Functions
     ========================================================================== */
  
  /* Convert SVG to specified color */
  function colorSVG(element, color) {
    jQuery(element).css('fill', color);
  };
  
  /* Simulate document height */
  function docHeight(selector) {
    var heights = new Array();
        
    jQuery(selector).each(function(){
      heights.push(jQuery(this).outerHeight());
    });
    
    var total = 0;
    
    for (var i = 0; i < heights.length; i++) {
      total += heights[i] << 0;
    }
    
    jQuery('body').css('margin-bottom', (total*2)+600);
  }
  
  /* Check if an element has scroleld into view */
  function isInViewport(element)
  {
    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();
  
    var elementTop = jQuery(element).offset().top;
    var elementBottom = elementTop + (jQuery(element).outerHeight());
  
    return ((elementBottom <= viewportBottom) && (elementTop >= viewportTop));
  }
  
  function addVisibleClass(element) {
    element.each(function(){
      if(isInViewport(jQuery(this)) ) {
        jQuery(this).addClass('visible'); 
      }
    });
  }
  
  