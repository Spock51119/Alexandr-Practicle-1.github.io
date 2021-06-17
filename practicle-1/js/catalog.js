// Переменные и обработчик событий для каталога товаров
const showCategory = document.querySelector('.catalog__mobile-titles')
const categoryWrapper = document.querySelector('.catalog__mobile-categories')

showCategory.addEventListener('click', () => {
  showCategory.classList.toggle('catalog__mobile-titles_open')
  categoryWrapper.classList.toggle('catalog__mobile-categories_open')
  if (showCategory.classList.contains('catalog__mobile-titles_open')) {
    showCategory.innerHTML = 'Закрыть'
  } else {
    showCategory.innerHTML = 'показать все категории (14)'
  }
})

// Переменные и обработчик событий для кастомного селекта
const breakPoint = 1250 // Свыше этого разрешения не срабатывает
const select = document.querySelector('.sorting__items')
const firstSelect = document.querySelector('.sorting__title-select')

firstSelect.addEventListener('click', () => {
  if (document.documentElement.clientWidth > breakPoint) return

  select.classList.toggle('sorting__items_open')
  firstSelect.classList.toggle('sorting__title-select_open')
})

select.addEventListener('click', (event) => {
  if (document.documentElement.clientWidth > breakPoint) return
  if (event.target.tagName === 'LABEL') {
    console.log(event.target.innerHTML.split('\n')[0])
    firstSelect.classList.toggle('sorting__title-select_open')
    firstSelect.innerHTML = event.target.innerHTML.split('\n')[0]
    select.classList.toggle('sorting__items_open')
  }
})

// переключение раскладки карточек товара

const buttonsSwitches = document.querySelector('.sorting__layout')
const productsCards = document.querySelector('.product-cards')

buttonsSwitches.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'three') {
    productsCards.className = 'product-cards'
  } else if (event.target.dataset.type === 'four') {
    productsCards.className = 'product-cards product-cards_four'
  } else if (event.target.dataset.type === 'list') {
    productsCards.className = 'product-cards product-cards_list'
  }
})
