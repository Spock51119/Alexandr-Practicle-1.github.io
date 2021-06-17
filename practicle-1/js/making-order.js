const paymentMethods = document.getElementById('payment-methods')

paymentMethods.addEventListener('click', (event) => {
  if (event.target.tagName === 'LABEL') {
    document.querySelectorAll('.radio-payment_checked')
      .forEach(item => item.classList.remove('radio-payment_checked'))
    event.target.classList.add('radio-payment_checked')
  }
})

const showItems = document.querySelector('.order-final__show-btn')
const wrapperItems = document.querySelector('.order-final__items')

showItems.addEventListener('click', () => {
  wrapperItems.classList.toggle('order-final__items_close')
})
