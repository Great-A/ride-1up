$(document).ready(function() {
    $('.colors-list .color').click(function() {
        $('.color.active').removeClass('active');
        $(this).addClass('active');
    });


    $(".counter-block .plus").click(function() {
        var count = $(this).siblings(".count").text();
        count++;
        $(this).siblings(".count").text(count);
      });
      
      $(".counter-block .minus").click(function() {
        var count = $(this).siblings(".count").text();
        count--;
        if (count < 1) {
          count = 1;
        }
        $(this).siblings(".count").text(count);
      });

      $('.product-slider').slick({
        arrows: true,
        infinite: false,
      });



      $(window).on('scroll', function() {
        if ($('#mini-banner-products').offset().top <= $(window).scrollTop()) {
            $('#mini-banner-products').addClass('sticky');
          } else {
            $('#mini-banner-products').removeClass('sticky');
          }
      });


  });

  