import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);
const slider2 = document.querySelector('.works__swiper');



let worksSwiper;

function mobileSlider2() {
	if (window.innerWidth <= 1070 && slider2.dataset.mobile == 'false') {
		worksSwiper = new Swiper(slider2, {
			loop: true,
      slideClass: "works__item",
      wrapperClass: "works__swiper-wrapper",
			navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        550: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        830: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
      },
      autoplay: {
        delay: 2000,
      },
		});

		slider2.dataset.mobile = 'true';
	}

	if (window.innerWidth > 1070) {
		slider2.dataset.mobile = 'false';
		if (slider2.classList.contains('swiper-container-initialized')) {
			worksSwiper.destroy();
		}
	}
}

mobileSlider2()

window.addEventListener('resize', () => {
	mobileSlider2();
});

