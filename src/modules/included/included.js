import baron       from 'baron';
import initSlider  from '../../js/initSlider';
import Breakpoints from 'breakpoints-js';

initSlider('.included__slider', {
  slidesPerView: 2,
  spaceBetween:  0,
  // loop:          true,
  wrapperClass:  'included__items',
  slideClass:    'included__item',
  navigation:    {
    prevEl: $('.included__pagination .arrow--left')[0],
    nextEl: $('.included__pagination .arrow--right')[0],
  },
  breakpoints:   {
    767: {
      slidesPerView: 1,
    },
  },
}, { sm: true, md: true, lg: false });


$('.included__item').each(( i, el ) => {
  const scroller = baron({
    // root:         '.included__content',
    root:         el,
    scroller:     '.included__contentInner',
    bar:          '.included__bar',
    track:        '.included__track',
    scrollingCls: '_scrolling',
    draggingCls:  '_dragging',
  });
  const update = () => setTimeout(() => scroller.update());
  Breakpoints.on('sm', 'enter', update);
  Breakpoints.on('md', 'enter', update);
  Breakpoints.on('lg', 'enter', update);
});

