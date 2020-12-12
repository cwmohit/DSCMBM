$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


  $('.font-div').click(function () {

    $('.collapse').collapse('hide');
  });