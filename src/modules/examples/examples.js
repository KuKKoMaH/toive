import initSlider from '../../js/initSlider';

initSlider('.examples__slider', {
  slidesPerView: 1,
  spaceBetween:  20,
  loop:          true,
  wrapperClass:  'examples__items',
  slideClass:    'examples__item',
  autoHeight:    true,
  navigation:    {
    prevEl: $('.examples__pagination .arrow--left')[0],
    nextEl: $('.examples__pagination .arrow--right')[0],
  },
}, { sm: true, md: true, lg: true });
