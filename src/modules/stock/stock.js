import initSlider from '../../js/initSlider';

$('.stock__more').on('click', () => $('.stock').addClass('stock--active'));

initSlider('.stock__slider', {
  slidesPerView: 1,
  spaceBetween:  20,
  loop:          true,
  wrapperClass:  'stock__items',
  slideClass:    'stock__item',
  navigation:    {
    prevEl: $('.stock__pagination .arrow--left')[0],
    nextEl: $('.stock__pagination .arrow--right')[0],
  },
}, { sm: true, md: true, lg: false });

$('.stock__secondary').on('click', ( e ) => {
  const $el = $(e.delegateTarget);
  const $parent = $el.parents('.stock__item');
  $parent.find('.stock__primary').css('background-image', `url(${$el.data('image')})`)
});
