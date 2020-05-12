$('.fundament__button').on('click', ( e ) => {
  const $el = $(e.delegateTarget);
  const $content = $el.parents('.fundament__content');
  if ($el.hasClass('fundament__button--active')) {
    $content.find('.fundament__contentContainer').css('max-height', 0);
    $el.removeClass('fundament__button--active');
    $el.text('Развернуть');
  } else {
    $content.find('.fundament__contentContainer').css('max-height', $content.find('.fundament__contentInner').outerHeight(true));
    $el.addClass('fundament__button--active');
    $el.text('Свернуть');
  }

});
