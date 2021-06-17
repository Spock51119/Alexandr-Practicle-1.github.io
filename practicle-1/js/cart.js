import Swiper from 'swiper/bundle'
import SwiperCore, { Navigation } from 'swiper/core'

// js для страницы корзины
const toggler = document.querySelector('.ordering-options__points-toggle')

toggler.addEventListener('click', () => {
  document.querySelector('.ordering-options__points-wrapper')
    .classList.toggle('ordering-options__points-wrapper_close')
  toggler.classList.toggle('ordering-options__points-toggle_close')
})

// category-b js для категорий похожих товаров
SwiperCore.use([Navigation])

const swiper = new Swiper('.carousel', {
  wrapperClass: 'carousel__cards',
  slideClass: 'carousel__card',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15
    },
    850: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.carousel__button-prev',
    prevEl: '.carousel__button-next'
  }
})
