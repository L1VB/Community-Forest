const hamMenu = document.querySelector('.ham-menu');
const openMenu = document.querySelector('.menu-open');
const openNav = document.querySelector('nav');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    openMenu.classList.toggle('active');
    openNav.classList.toggle('active');
})