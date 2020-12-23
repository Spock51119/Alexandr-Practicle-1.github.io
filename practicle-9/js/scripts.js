
// parallax effect to start section
const container = document.querySelector(".start")
let elemList = container.querySelectorAll("[data-speed]")

container.addEventListener("mousemove", parallax)

function parallax(event) {
  elemList.forEach(elem => {
    elem.style.transform = `translate(${event.clientX * elem.dataset.speed / 3000}px, ${event.clientY * elem.dataset.speed / 3000}px)`
  })
}


// burger

const burger = document.querySelector(".burger__icon");
burger.addEventListener("click", () => {
  if (burger.classList.contains("burger__icon_active")) {
    document.querySelector(".header__wrapper").classList.toggle("header__open-burger_close")
    burger.classList.toggle("burger__icon_active")
    setTimeout(() => {
      document.querySelector(".header__wrapper").classList.toggle("header__open-burger_close")
      document.querySelector(".login__modal").classList.toggle("login__modal_active")
      document.querySelector(".header__nav").classList.toggle("header__nav_active")
      document.querySelector(".header-nav__items").classList.toggle("header-nav__items_active")
      document.querySelector(".header__wrapper").classList.toggle("header__open-burger")
      document.querySelector(".header__wrapper").classList.toggle("wrapper");
    }, 300)
  }else {
    burger.classList.toggle("burger__icon_active")
    document.querySelector(".login__modal").classList.toggle("login__modal_active")
    document.querySelector(".header__nav").classList.toggle("header__nav_active")
    document.querySelector(".header-nav__items").classList.toggle("header-nav__items_active")
    document.querySelector(".header__wrapper").classList.toggle("header__open-burger")
    document.querySelector(".header__wrapper").classList.toggle("wrapper");
  }
})

// show modal window

const btnModal = document.querySelector(".login__modal")

btnModal.addEventListener("click", function(event) {
  showModal();
  event.stopPropagation();
});

document.querySelector(".login__btn-close").addEventListener("click", function(event) {
  event.stopPropagation();
  showModal();
});

document.querySelector(".login").addEventListener("click", function(event) {
  event.stopPropagation();
  if (!event.target.classList.contains("login_active")) return;
  showModal()
})

function showModal() {
  btnModal.classList.toggle("hidde");
  document.querySelector(".login").classList.toggle("login_active");
  document.querySelector(".login__window").classList.toggle("hidde");
}

// navigation

const btnNavigation = document.querySelectorAll(".site-nav__item")
const sections = document.querySelectorAll("section")
let prevElem = document.getElementById("0");


document.querySelector(".site-nav__items").addEventListener("click", function(event) {
  if (event.target.tagName != "A") return;
  removActive()
  event.target.style.pointerEvents = "none";
  event.target.closest("LI").classList.toggle("site-nav__item_active")
  changeSections(event.target)
})

function removActive() {
  btnNavigation.forEach(item => {
    item.classList.remove("site-nav__item_active");
    item.querySelector(".site-nav__link").style.pointerEvents = "auto";
  })
}


function changeSections(activ) {
  let direction = null;
  let currentElem = document.getElementById(activ.href.match(/(?<=#)\S+/)[0]);
  sections.forEach(item => {
    if (+item.id != +currentElem.id) {
      item.classList.add("hidde")
    }else {
      item.classList.remove("hidde")
      direction = addAnimation(item.id, prevElem.id);
    }
  })
  currentElem.classList.add(direction);
  checkEvent(currentElem, prevElem);
  setTimeout(() => {
    currentElem.classList.remove(direction)
    prevElem = currentElem;
  }, 500)
}

function addAnimation(elem1, elem2) {
  if (elem1 < elem2) {
    return "from-top";
  }else {
    return "from-bottom"; 
  }
}

function checkEvent(currentSection, prevSection) {
  if (currentSection.id != 0 && currentSection.id != "infinity") {
    prevSection.removeEventListener("mousemove", parallaxSection)
    currentSection.addEventListener("mousemove", parallaxSection)
  }
}

  function parallaxSection(event) {
    event.target.closest("SECTION").querySelector(".item__number-bcg").style.transform = `translate(${event.clientX / 150}px, ${-event.clientY / 100}px)`
    event.target.closest("SECTION").querySelector(".item__illustration").style.boxShadow = `${(event.clientX - 90) / 130}px ${-event.clientY / 100}px 25px 4px #ffffff85`
  }

