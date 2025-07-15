const hamburguesa = document.querySelector(".header--menu");
const nav = document.querySelector(".header--nav");
const body = document.body;
const navList = document.querySelector(".nav-list");
const backgroundNavbar = document.querySelector('.background-navbar');

/* EVENTO PARA CAMBIAR EL BACKGROUND DEL HEADER
document.addEventListener('scroll', function() {
    const header = document.querySelector('.header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})*/

hamburguesa.addEventListener('click', () => {
    nav.classList.toggle('show');
    backgroundNavbar.classList.toggle('show');
    body.classList.toggle("no-scroll");
})

backgroundNavbar.addEventListener('click', () => {
    backgroundNavbar.classList.remove('show');
    nav.classList.remove('show');
    body.classList.remove('no-scroll');
})


// Mostrar cantidad de productos en carrito
if(localStorage.getItem('shopping_cart')){
    const span = document.querySelectorAll('.shopping-cart--count');

    const products = JSON.parse(localStorage.getItem('shopping_cart'));
    const count = products.length;

    span.forEach(s => {
        s.textContent = count;
    })
}