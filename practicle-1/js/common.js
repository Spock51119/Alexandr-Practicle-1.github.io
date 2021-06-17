const burger = document.querySelector('.header__burger-menu')
const navigation = document.querySelector('.header__navitation')
burger.addEventListener('click', () => {
  stopScroll()
  if (navigation.classList.contains('header__navitation_open')) {
    navigation.addEventListener('click', stopScroll)
  } else {
    navigation.removeEventListener('click', stopScroll)
  }
})

function stopScroll () {
  burger.classList.toggle('header__burger-menu_open')
  navigation.classList.toggle('header__navitation_open')
  document.body.classList.toggle('stop-scroll')
}

/*
Обрабатывает все фокусы на странице нужно проверять
влияние на производительность
*/

const inputs = document.querySelectorAll('.input__item')

inputs.forEach(item => checkFocus(item))

function checkFocus (item) {
  item.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
      event.target.parentNode.classList.add('input_focus')
    } else {
      event.target.parentNode.classList.remove('input_focus')
    }
  })
}

// Всем инпутам с паролем навешивает обработчик

const passwordInputs = document.querySelectorAll('.password__item')

passwordInputs.forEach(item => passwordEvent(item))

function passwordEvent (item) {
  const parent = item.parentNode
  const btnToggler = parent.querySelector('.password__toggle-show')
  // Следит за вводом в поле
  item.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
      event.target.parentNode.classList.add('password_focus')
    } else {
      event.target.parentNode.classList.remove('password_focus')
    }
  })

  // Ищет и навешивает сбытие кнопке переключающей видимость

  item.parentNode.querySelector('.password__toggle-show')
  btnToggler.addEventListener('click', (event) => {
    event.stopPropagation()
    parent.classList.toggle('password_show')

    // Меняет видимость пароля
    if (item.type === 'password') {
      item.type = 'text'
    } else {
      item.type = 'password'
    }
  })
}

// Всем select навершивает обработчик событий для смены флажка

const allSelects = document.querySelectorAll('.select')

allSelects.forEach(item => selectToggle(item))

function selectToggle (item) {
  item.addEventListener('click', () => {
    item.classList.toggle('select_open')
  })
}

// Открывает/закрывает инпут поиска в шапке сайта

const searchBtn = document.querySelector('.search__btn')
const searchInput = document.querySelector('.search__input')

searchBtn.addEventListener('click', () => {
  if (!searchInput.classList.contains('search__input_open')) {
    searchInput.classList.add('search__input_open')
  } else {
    if (searchInput.value.length === 0) {
      searchInput.classList.remove('search__input_open')
    } else {
      // отправка формы
    }
  }
})
