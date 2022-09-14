$(function() {
    let topBar = $('.top-bar');
    let slider = $('.slider');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 85) {
       topBar.addClass('fixed');
       slider.addClass('slider-mover');
      } else {
       topBar.removeClass('fixed');
       slider.removeClass('slider-mover');
      }
    });
   });