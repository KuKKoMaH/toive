import scriptLoader from '../../js/scriptLoader';

const $map = $(".places__map");
let inited = false;
const initMap = () => {
  if (inited) return;
  inited = true;
  scriptLoader(`https://api-maps.yandex.ru/2.1/?lang=ru_RU`, () => {
    ymaps.ready(init);

    function init() {
      const el = $map[0];

      try {

        const myMap = new ymaps.Map(el, {
          controls: ['fullscreenControl', 'zoomControl'],
          bounds:   ymaps.util.bounds.fromPoints(window.PLACES),
        }, {
          fullscreenControlFloat: 'left',
        });

        for (let i = 0; i < window.PLACES.length; i++) {
          myMap.geoObjects.add(new ymaps.Placemark(window.PLACES[i]));
        }

      } catch (e) {
        console.log(e);
      }
    }
  });
};

if ($map.length) {
  var observer = new IntersectionObserver(( entries ) => {
    const entry = entries[0];
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      initMap();
    }
  }, { threshold: 0 });
  observer.observe($map[0]);
}

