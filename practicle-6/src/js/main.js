import './vendor/focus-visible.min.js';
import './_vars';
import "./_pool-expert"
import "./_works"
import "./_plan"
import "./_testimonials"
import "./_burger"
// import {resizeContent} from './functions/resize';
// import {scrollTo} from './functions/smooth-scroll';
// import {disableScroll, enableScroll} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed



// import Swiper JS
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:"bullets",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    800: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1120: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },
})

