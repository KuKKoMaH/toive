import initSlider from '../../js/initSlider';

initSlider('.team__slider', {
  slidesPerView: 4,
  spaceBetween:  28,
  loop:          true,
  wrapperClass:  'team__items',
  slideClass:    'team__item',
  navigation:    {
    prevEl: $('.team__pagination .arrow--left')[0],
    nextEl: $('.team__pagination .arrow--right')[0],
  },
  breakpoints:   {
    1300: {
      slidesPerView: 2,
    },
    768:  {
      slidesPerView: 1,
    },
  },
}, { sm: true, md: true, lg: true });
