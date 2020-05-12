import initSlider  from '../../js/initSlider';
import initGallery from '../../js/initGallery';

$('.gallery').each(( i, el ) => {
  initGallery({
    $items: $(el).find('.gallery__img'),
  });
});

$('.gallery').each(( i, el ) => {
  const $el = $(el);
  initSlider($el.find('.gallery__slider'), {
    slidesPerView: 4,
    spaceBetween:  29,
    loop:          true,
    wrapperClass:  'gallery__items',
    slideClass:    'gallery__item',
    navigation:    {
      prevEl: $el.find('.gallery__pagination .arrow--left')[0],
      nextEl: $el.find('.gallery__pagination .arrow--right')[0],
    },
    breakpoints:   {
      1299: {
        slidesPerView: 2,
      },
      767:  {
        slidesPerView: 1,
      },
    },
  }, { xs: true, sm: true, md: true, lg: !$el.hasClass('gallery--full') });
});

