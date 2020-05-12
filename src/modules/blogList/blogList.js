import initSlider from '../../js/initSlider';

initSlider('.blogList__slider', {
  slidesPerView: 1,
  spaceBetween:  20,
  autoHeight:    true,
  wrapperClass:  'blogList__items',
  slideClass:    'blogList__item',
  navigation:    {
    prevEl: $('.blogList__pagination .arrow--left')[0],
    nextEl: $('.blogList__pagination .arrow--right')[0],
  },
  on:            {
    reachEnd: window.onSliderReachEnd,
  },
}, { sm: true, md: true, lg: false });
