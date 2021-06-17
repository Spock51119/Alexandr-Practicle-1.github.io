import SwiperCore, { Navigation } from 'swiper/core'
import Swiper from 'swiper/bundle'

SwiperCore.use([Navigation])
const swiper = new Swiper('.reviews', {
  direction: 'horizontal',
  wrapperClass: 'reviews__swiper-wrapper',
  slideClass: 'reviews__swiper-item',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 41,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
  // autoplay: {
  //   delay: 5000
  // }
})

const toggleReviews = document.querySelector('.partner-reviews__title')
const reviews = document.querySelector('.reviews')

toggleReviews.addEventListener('click', (event) => {
  toggleReviews.classList.toggle('partner-reviews__title_open')
  reviews.classList.toggle('reviews_hide')
})

const inputFile = document.querySelector('.upload-files__input')
inputFile.addEventListener('change', (event) => {
  event.target.classList.remove('upload-files__input_hide')
})

const tabs = document.querySelector('.leave-request__tabs')
tabs.addEventListener('click', (event) => {
  if (event.target.classList.contains('leave-request__tab-btn')) {
    document.querySelector('.leave-request__tab-btn_selected').classList.remove('leave-request__tab-btn_selected')
    event.target.classList.add('leave-request__tab-btn_selected')
  }
})
