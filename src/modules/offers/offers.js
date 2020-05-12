import initSlider from '../../js/initSlider';

const $items = $('.offers__item');
$('.offers__button').on('click', ( e ) => {
  $items.removeClass('offers__item--active');
  $(e.delegateTarget).parents('.offers__item').addClass('offers__item--active');
});

initSlider('.offers__slider', {
  slidesPerView: 1,
  spaceBetween:  20,
  wrapperClass:  'offers__items',
  slideClass:    'offers__item',
  navigation:    {
    prevEl: $('.offers__pagination .arrow--left')[0],
    nextEl: $('.offers__pagination .arrow--right')[0],
  },
}, { sm: true, md: false, lg: false });
