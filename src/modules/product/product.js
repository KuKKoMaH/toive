import initSlider  from '../../js/initSlider';
import initGallery from '../../js/initGallery';

$('.product').each(( i, el ) => {
  const $el = $(el);
  initSlider($el.find('.product__gallery'), {
    slidesPerView: 1,
    spaceBetween:  10,
    loop:          true,
    wrapperClass:  'product__galleryItems',
    slideClass:    'product__image',
    navigation:    {
      prevEl: $el.find('.product__pagination .arrow--left')[0],
      nextEl: $el.find('.product__pagination .arrow--right')[0],
    },
  }, { sm: true, md: true, lg: false });
});

//
// $('.product').each((i, el) => {
//   initGallery({
//     $items: $(el).find('.product__img')
//   });
// })
//

$('.product__image').on('click', ( e ) => {
  const $el = $(e.delegateTarget);
  $el
    .parents('.product__images')
    .find('.product__primaryImage')
    .css('background-image', `url(${$el.data('image')})`)
  ;
});
