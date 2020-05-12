import initSlider from '../../js/initSlider';

$('.items__container').each(( i, el ) => {
  const $el = $(el);
  initSlider($el.find('.items__slider'), {
    slidesPerView: 2,
    spaceBetween:  10,
    loop:          true,
    wrapperClass:  'items__items',
    slideClass:    'items__item',
    navigation:    {
      prevEl: $el.find('.items__pagination .arrow--left')[0],
      nextEl: $el.find('.items__pagination .arrow--right')[0],
    },
    breakpoints:   {
      767: {
        slidesPerView: 1,
      },
    },
  }, { sm: true, md: true, lg: false });
});

