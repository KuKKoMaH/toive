import 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'jquery.maskedinput/src/jquery.maskedinput';
import SmoothScroll from 'smooth-scroll';
import 'selectize';
import './js/init';
import './js/saveUTM';
import './js/popups';
import './modules/header/header';
import './modules/offers/offers';
import './modules/included/included';
import './modules/team/team';
import './modules/examples/examples';
import './modules/places/places';
import './modules/stock/stock';
import './modules/test/test';
import './modules/items/items';
import './modules/product/product';
import './modules/detail/detail';
import './modules/catalog/catalog';
import './modules/gallery/gallery';
import './modules/fundament/fundament';
import './modules/blogList/blogList';
import './modules/related/related';
import './modules/map/map';
import './modules/blog/blog';

import './js/lazyImages';

$('.select').selectize({ maxItems: 1 });

$('input[type="tel"]').mask("+7 (999) 999-99-99");
// $('input[type="tel"]')
//   .on('input', function (e) {
//     var clearVal = e.target.value.replace(/[^0-9]/g, '');
//     if (clearVal.length === 11 && clearVal[0] === '7') {
//       e.preventDefault();
//       e.stopPropagation();
//       e.target.value = clearVal.slice(1);
//       return false;
//     }
//   })
//   .mask("(999) 999-99-99");


window.smoothscroll = new SmoothScroll("a[href^='#']:not([href='#'])", { header: '.header' });

// const $viewport = document.getElementById('viewport');
// $(window).on('resize', () => {
//   $viewport.setAttribute('content', screen.width <= 375
//     ? 'width=375, user-scalable=no'
//     : 'width=device-width, user-scalable=no',
//   );
// });
