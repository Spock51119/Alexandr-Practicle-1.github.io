import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);
const slider = document.querySelector('.pool-expert__container');


let poolSwiper;

function mobileSlider() {
	if (window.innerWidth <= 770 && slider.dataset.mobile == 'false') {
		poolSwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
      slideClass: "pool-expert__item",
      wrapperClass: "pool-expert__container-wrap",
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
      breakpoints: {
        500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
      autoplay: {
        delay: 2000,
      },
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 770) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
      console.log("xxx")
			poolSwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

