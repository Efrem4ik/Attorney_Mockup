$('.slider__items').slick({
  // centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.header__menu-btn').on("click", function () {
  $('.header__menu > ul').slideToggle();
});