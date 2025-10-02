const hamMenu = document.querySelector('.ham-menu');
const openMenu = document.querySelector('.menu-open');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    openMenu.classList.toggle('active');
})