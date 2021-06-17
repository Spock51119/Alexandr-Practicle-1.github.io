import Swiper from 'swiper/bundle'
import SwiperCore, { Navigation } from 'swiper/core'

// свайпер иллюстраций продукта
SwiperCore.use([Navigation])

const swiperIllustration = new Swiper('.product-images', {
  wrapperClass: 'product-images__wrapper ',
  slideClass: 'product-images__item',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    }
  },
  navigation: {
    nextEl: '.product-images__btn_prev',
    prevEl: '.product-images__btn_next'
  }
})

// js страницы

const toggleBtns = document.querySelector('.tabs-toggle')
const descriptionWrapper = document.querySelector('.product__description-wrapper')

toggleBtns.addEventListener('click', (event) => {
  toggleDescription(event)
})

descriptionWrapper.addEventListener('click', (event) => {
  toggleDescription(event)
})

function toggleDescription (event) {
  if (event.target.dataset.type === 'description') {
    document.getElementById('content-description')
      .classList.remove('product__description-item_close')
    document.getElementById('content-specifications')
      .classList.add('product__description-item_close')
    // Переключение стилей кнопок
    document.getElementById('btn-desc')
      .classList.add('tabs-toggle__btn_selected')
    document.getElementById('btn-spec')
      .classList.remove('tabs-toggle__btn_selected')
  } else if (event.target.dataset.type === 'specifications') {
    document.getElementById('content-description')
      .classList.add('product__description-item_close')
    document.getElementById('content-specifications')
      .classList.remove('product__description-item_close')
    // Переключение стилей кнопок
    document.getElementById('btn-desc')
      .classList.remove('tabs-toggle__btn_selected')
    document.getElementById('btn-spec')
      .classList.add('tabs-toggle__btn_selected')
  }
}

// свайпер похожих продуктов
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
