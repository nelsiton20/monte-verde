const hamburguesa = document.querySelector(".header--menu");
const nav = document.querySelector(".header--nav");
const body = document.body;
const navList = document.querySelector(".nav-list");

hamburguesa.addEventListener("click", () => {
    nav.classList.toggle("activo");
    console.log('hamburguesa');
    body.classList.toggle("no-scroll");
})

nav.addEventListener("click", (e) => {
    console.log('clickeando el nav');
    nav.classList.remove('activo');
    body.classList.remove("no-scroll");
})

navList.addEventListener("click", (e) => {
    e.stopPropagation();
})


// Mostrar cantidad de productos en carrito
if(localStorage.getItem('shopping_cart')){
    const span = document.querySelector('.shopping-cart--count');

    const products = JSON.parse(localStorage.getItem('shopping_cart'));
    const count = products.length;

    console.log('count: ' + count);

    span.textContent = count;
}