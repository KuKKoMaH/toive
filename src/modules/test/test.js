import SmoothScroll from 'smooth-scroll';

if (!$('.test').lenght) {
  const scroll = new SmoothScroll(null, { header: '.header' });

  let result = {
    season:  null,
    floors:  null,
    s:       null,
    glazing: null,
    style:   null,
  };

  const $steps = $('.test__step');
  const toStep = ( index ) => {
    setTimeout(() => {
      $steps.removeClass('test__step--active');
      $steps.eq(index - 1).addClass('test__step--active');
      scroll.animateScroll($('.test')[0]);
    }, 100);
  };

  $('.test1__item').on('click', ( e ) => {
    result.season = $(e.delegateTarget).data('value');
    toStep(2);
  });

  $('.test2__item').on('click', ( e ) => {
    const $el = $(e.delegateTarget);
    result.floors = $el.data('value');
    $('.test2__item').removeClass('test2__item--active');
    $el.addClass('test2__item--active');

    if (result.floors && result.s) toStep(3);
  });

  $('.test2__check input').on('change', ( e ) => {
    result.s = e.delegateTarget.value;

    if (result.floors && result.s) toStep(3);
  });

  $('.test3__item').on('click', ( e ) => {
    result.glazing = $(e.delegateTarget).data('value');
    toStep(4);
  });

  $('.test4__item').on('click', ( e ) => {
    result.style = $(e.delegateTarget).data('value');
    toStep(5);
    const cb = window.ON_TEST_COMPLETE || console.log;
    cb(result);
  });
}
