const ctaBurger = document.querySelector('.cta__burger');
const menuBurger = document.querySelector('.menu__burger');

ctaBurger.addEventListener('click', ()=> {
    ctaBurger.classList.toggle('open')
    menuBurger.classList.toggle('active')
})
