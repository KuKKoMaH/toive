import Breakpoints from 'breakpoints-js';

const $document = $(document);
const $header = $('.header');
// let menuOffset = $('.header__menu').offset().top;
let menuOffset = 101;
let menuVisible = false;

const activeClass = 'header--active';
const fixedClass = 'header--fixed';

$('.header__button').on('click', toggleMenu);
$header.on('click', ( e ) => {
  if (!$(e.target).parents('.c').length) hideMenu();
});

function toggleMenu() {
  if (menuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
}

function showMenu() {
  if (menuVisible) return;
  $header.addClass(activeClass);
  menuVisible = true;
}

function hideMenu() {
  if (!menuVisible) return;
  $header.removeClass(activeClass);
  menuVisible = false;
}

$header.find('a[href*="#"]').on('click', () => hideMenu());

$(window).on('scroll', checkMenuFixed);
$(window).on('resize', () => {
  // menuOffset = $('.header__menu').offset().top;
  checkMenuFixed();
});

let headerFixed = false;

function checkMenuFixed() {
  const scrollTop = $document.scrollTop();
  if (!Breakpoints.is('lg')) {
    if (scrollTop) {
      $header.addClass(fixedClass);
      headerFixed = true;
    } else {
      $header.removeClass(fixedClass);
      headerFixed = false;
    }
    return;
  }
  if (scrollTop > menuOffset && !headerFixed) {
    $header.addClass(fixedClass);
    headerFixed = true;
  } else if (scrollTop < menuOffset && headerFixed) {
    $header.removeClass(fixedClass);
    headerFixed = false;
  }
}

checkMenuFixed();

// Breakpoints.on('lg', 'enter', () => {
//   initOptions.lg ? initSlider() : destroySlider();
// });
//
// Breakpoints.on('lg', 'exit', () => {
//   initOptions.lg ? initSlider() : destroySlider();
// });
