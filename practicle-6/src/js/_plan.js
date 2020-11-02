import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);
const slider3 = document.querySelector('.plan__container');

let planSwiper;

function mobileSlider3() {
	if (window.innerWidth <= 1200 && slider3.dataset.mobile == 'false') {
		planSwiper = new Swiper(slider3, {
			loop: true,
      slideClass: "plan__item",
      wrapperClass: "plan__swiper-wrapper",
			navigation: {
        		nextEl: '.swiper-button-next',
        		prevEl: '.swiper-button-prev',
        	},
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        760: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
      autoplay: {
        delay: 2000,
      },
		});

		slider3.dataset.mobile = 'true';
	}

	if (window.innerWidth > 1200) {
		slider3.dataset.mobile = 'false';
		if (slider3.classList.contains('swiper-container-initialized')) {
			planSwiper.destroy();
		}
	}
}

mobileSlider3()

window.addEventListener('resize', () => {
	mobileSlider3();
});

