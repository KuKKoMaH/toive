import initSlider from '../../js/initSlider';

initSlider('.catalog__advantagesSlider', {
  slidesPerView: 'auto',
  spaceBetween:  60,
  loop:          false,
  wrapperClass:  'catalog__advantages',
  slideClass:    'catalog__advantage',
  navigation:    {
    prevEl: $('.catalog__advantagesPagination .arrow--left')[0],
    nextEl: $('.catalog__advantagesPagination .arrow--right')[0],
  },
}, { sm: true, md: true, lg: false });

initSlider('.catalogSubmenu__slider', {
  slidesPerView: 1,
  spaceBetween:  0,
  loop:          false,
  wrapperClass:  'catalogSubmenu__items',
  slideClass:    'catalogSubmenu__item',
  navigation:    {
    prevEl: $('.catalogSubmenu__pagination .arrow--left')[0],
    nextEl: $('.catalogSubmenu__pagination .arrow--right')[0],
  },
}, { sm: true, md: true, lg: false });


$('.catalog__header').on('click', ( e ) => {
  const $item = $(e.currentTarget);
  const index = $item.index();
  const $parent = $item.parents('.catalog');

  const $items = $parent.find('.catalog__tab');
  $items.removeClass('catalog__tab--active');
  $items.eq(index).addClass('catalog__tab--active');

  const $headers = $parent.find('.catalog__header');
  $headers.removeClass('catalog__header--active');
  $item.addClass('catalog__header--active');
});
