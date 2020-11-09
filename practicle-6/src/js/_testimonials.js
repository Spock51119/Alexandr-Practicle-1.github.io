import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);
const slider4 = document.querySelector('.testimonials__container');


let testimonialsSwiper;

function mobileSlider4() {
	if (window.innerWidth <= 800 && slider4.dataset.mobile == 'false') {
		testimonialsSwiper = new Swiper(slider4, {
      loop: true,
      slideClass: "testimonials__item",
      wrapperClass: "testimonials__swiper-wrapper",
			pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        450: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
		});

		slider4.dataset.mobile = 'true';
	}

	if (window.innerWidth > 800) {
		slider4.dataset.mobile = 'false';
		if (slider4.classList.contains('swiper-container-initialized')) {
			testimonialsSwiper.destroy();
		}
	}
}

mobileSlider4()

window.addEventListener('resize', () => {
	mobileSlider4();
});


