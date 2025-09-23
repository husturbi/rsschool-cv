const menuBtn = document.querySelector('.menu-btn');
const navbarList = document.querySelector('.navbar-list');
const hiddenOverley = document.querySelector('.hidden-overley');
const bodyNoScroll = document.querySelector('body');
const navLink = document.getElementsByClassName('navbar-link');
 
/*Функция добавления/удаления классов при нажатии*/
const pushLinkFunction = function() {
    menuBtn.classList.toggle('open');
    navbarList.classList.toggle('navbar-list-open');
    hiddenOverley.classList.toggle('navbar-list-open');
    bodyNoScroll.classList.toggle('navbar-list-open');
};

/*Событие на бургер-меню*/
menuBtn.addEventListener('click', pushLinkFunction, false);

/*Событие на оверлей*/
hiddenOverley.addEventListener('click', pushLinkFunction, false);

/*Событие на ссылки меню(их несколько)*/
for( i=0; i < navLink.length; i++ ){
    navLink[i].addEventListener('click', pushLinkFunction, false);
}