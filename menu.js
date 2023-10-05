const hamburgerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay')


hamburgerIcon.addEventListener('click', ()=> {
    hamburgerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show');
})