$(function(){
    $('.top-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/back.svg" alt="next"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/forward.svg" alt="next"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {

            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false
            }
          }
        ]
      });
});