//menu
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.menu-open');
const openNav = document.querySelector('nav');
const map = document.querySelector('.map');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    openMenu.classList.toggle('active');
    openNav.classList.toggle('active');
    // map.classList.toggle('disable');
});