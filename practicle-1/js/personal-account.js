const navigationAside = document.querySelector('.navigation__items')
const pageTitle = document.querySelector('.personal-account__title-page')

const windowContent = document.querySelector('.personal-account__content')

// переключение пункта навигации
navigationAside.addEventListener('click', (event) => {
  if (event.target.classList.contains('navigation__btn')) {
    const currentClass = '.' + event.target.dataset.value
    const currentTitle = event.target.innerHTML.split('\n')[0]
    pageTitle.innerHTML = currentTitle
    Array.from(windowContent.children).forEach(item => item.classList.add('disabled'))
    document.querySelector(currentClass)
      .classList.remove('disabled')

    document.querySelectorAll('.navigation__btn_selected')
      .forEach(item => item.classList.remove('navigation__btn_selected'))
    event.target.classList.add('navigation__btn_selected')

    navigationToggle()
  }
})

// Открытие/закрытие навигации

document.querySelector('.personal-account__btn-navigation')
  .addEventListener('click', navigationToggle)

function navigationToggle () {
  document.querySelector('.personal-account__navigation')
    .classList.toggle('personal-account__navigation_open')
  document.querySelector('.personal-account__btn-navigation')
    .classList.toggle('personal-account__btn-navigation_open')
}

// Переключение контента по пунктам навигации

window.onload = checkOpen

function checkOpen () {
  // открывает/закрывает модалку смены пароля.
  if (document.querySelector('.info-profile__btn-change-password')) {
    const changePasswordBtn = document.querySelector('.info-profile__btn-change-password')
    const changePasswordWindow = document.querySelector('.change-password')

    changePasswordBtn.addEventListener('click', () => {
      changePasswordWindow
        .classList.remove('disabled')
      document.body.classList.add('stop-scroll')

      document.querySelector('.change-password__btn-close')
        .addEventListener('click', () => {
          changePasswordWindow.classList.add('disabled')
          document.body.classList.remove('stop-scroll')
        })
    })
  }

  // открывает/закрывает модалку изменения личных данных.
  if (document.querySelector('.info-profile__btn-edit') && document.querySelector('.change-data')) {
    const changeDataBtn = document.querySelector('.info-profile__btn-edit')
    const changeDataWindow = document.querySelector('.change-data')

    changeDataBtn.addEventListener('click', () => {
      changeDataWindow
        .classList.remove('disabled')
      document.body.classList.add('stop-scroll')

      document.querySelector('.change-data__btn-close')
        .addEventListener('click', () => {
          changeDataWindow.classList.add('disabled')
          document.body.classList.remove('stop-scroll')
        })
    })
  }

  // order-blank открытие/закрытие категории
  if (document.querySelector('.order-blank')) {
    const orderBlank = document.querySelector('.order-blank')

    orderBlank.addEventListener('click', (event) => {
      if (event.target.classList.contains('order-blank__category-name')) {
        event.target.parentNode.classList
          .toggle('order-blank__category_open')
      }
    })
  }

  // чекбоксы
  if (document.querySelector('.settings')) {
    const allCheckbox = document.querySelectorAll('.checkbox__input')

    allCheckbox.forEach(item => {
      addChecked(item)
      item.addEventListener('click', () => addChecked(item))
    })

    function addChecked (item) {
      if (item.checked) {
        item.parentNode.classList.add('checkbox_checked')
      } else {
        item.parentNode.classList.remove('checkbox_checked')
      }
    }
  }

  // открытие/закрытие модалки добавления адреса
  if (document.querySelector('.addresses')) {
    const addAddress = document.querySelector('.addresses__add-address')

    addAddress.addEventListener('click', () => {
      document.querySelector('.add-address')
        .classList.toggle('disabled')
      document.body.classList.add('stop-scroll')
    })

    document.querySelector('.add-address__btn-close')
      .addEventListener('click', () => {
        document.querySelector('.add-address').classList.add('disabled')
        document.body.classList.remove('stop-scroll')
      })
  }
}

