import SwiperCore, { Navigation } from 'swiper/core'
import Swiper from 'swiper/bundle'

// js карты

ymaps.ready(init)
function init () {
  const myMap = new ymaps.Map('map', {
    center: [61.78746830566134, 98.76924876171871],
    zoom: 3.4,
    controls: []
  })

  myMap.setType('yandex#map')

  const coords = [
    [55.75, 37.50],
    [51.75, 55.10],
    [53.225468, 50.135367],
    [56.326722, 44.006479],
    [48.707255, 44.516758],
    [43.585326, 39.722453],
    [59.939143, 30.315466],
    [54.710058, 20.510212],
    [68.970698, 33.074492],
    [61.003193, 69.018563],
    [54.734999, 55.957480],
    [55.159984, 61.401887],
    [54.989386, 73.368080],
    [54.989386, 73.368080],
    [65.527184, 72.539960],
    [69.344079, 88.210032],
    [64.735876, 177.518731],
    [53.024769, 158.642270],
    [48.480077, 135.071070],
    [43.115421, 131.885624],
    [67.493233, 64.049158],
    [61.668872, 50.836322],
    [64.539747, 40.515038],
    [66.406950, 112.306703],
    [64.270429, 100.207812]
  ]
  const myCollection = new ymaps.GeoObjectCollection({}, {
    iconLayout: 'default#image',
    iconImageHref: './images/map-point.svg',
    iconImageSize: [31, 37]
  })

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]))
  }

  myMap.geoObjects.add(myCollection)

  // При клике на карту все метки будут удалены.
  myCollection.getMap().events.add('click', function () {
    myCollection.removeAll()
  })
}

// js страницы

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

