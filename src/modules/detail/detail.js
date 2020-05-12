import initSlider  from '../../js/initSlider';
import initGallery from '../../js/initGallery';

initSlider('.detail__gallery', {
  slidesPerView: 1,
  spaceBetween:  10,
  loop:          true,
  wrapperClass:  'detail__items',
  slideClass:    'detail__item',
  navigation:    {
    prevEl: $('.detail__pagination .arrow--left')[0],
    nextEl: $('.detail__pagination .arrow--right')[0],
  },
}, { xs: true, sm: false, md: false, lg: false });

initGallery({
  $items: $('.detail__img'),
});
initGallery({
  $items: $('.detail__floor'),
});
