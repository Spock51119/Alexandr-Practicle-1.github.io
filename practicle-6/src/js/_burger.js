document.querySelector('.burger').onclick = function(){
  document.querySelector('.burger__icon').classList.toggle('burger__icon_active');
  document.querySelector('.nav-menu').classList.toggle('nav-menu_active');
  document.querySelector('body').classList.toggle("locked");
};


let scroll;
let currentScrollPosition = 0;


let checkScrollLarge = function() {
scroll = window.pageYOffset;
if (scroll < currentScrollPosition) {
  document.querySelector('.header').classList.remove('header_disable');
}else{
  document.querySelector('.header').classList.add('header_disable');
};
currentScrollPosition = scroll;
};
let checkScrollSmall = function() {
scroll = window.pageYOffset;
if (scroll < currentScrollPosition) {
  document.querySelector('.burger').classList.remove('burger_disable');
}else{
  document.querySelector('.burger').classList.add('burger_disable');
};
currentScrollPosition = scroll;
};



window.onscroll = function() {
if (window.screen.width > 750) {
  checkScrollLarge()
}else {
  checkScrollSmall()
}
}