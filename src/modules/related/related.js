import initSlider from '../../js/initSlider';

initSlider('.related__slider', {
  slidesPerView: 1,
  spaceBetween:  20,
  autoHeight:    true,
  wrapperClass:  'related__items',
  slideClass:    'related__item',
  navigation:    {
    prevEl: $('.related__pagination .arrow--left')[0],
    nextEl: $('.related__pagination .arrow--right')[0],
  },
}, { sm: true, md: true, lg: false });
