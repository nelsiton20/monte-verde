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