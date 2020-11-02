$(document).on('ready', function () {
  $(".works").slick({
    draggable: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20%',
    arrows: false,
  });

  $('#next_work').on('click', function () {
    $('.works').slick('slickNext');
  });

  $('#prev_work').on('click', function () {
    $('.works').slick('slickPrev');
  });


  $(".items").slick({
    draggable: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('#prev_item'),
    nextArrow: $('#next_item'),

  });
});