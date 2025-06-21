const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgProducts = document.getElementById('img-p');
const imgServices = document.getElementById('img-s');
const prevServices = document.querySelector(".prevs");
const nextServices = document.querySelector(".nexts");
const productTitle = document.querySelector(".product-title");
const serviceTitle = document.querySelector(".service-title");

let indexProducts = 0;
let indexServices = 0;

function formatIndex(i){
    let index;
    if (i > 2) index = 0;
    else if (i < 0) index = 2;
    else index = i;

    return index;
}

function updateCarousel(index, section){
    if(section == "product"){
        imgProducts.src = images.products[indexProducts].src;
        productTitle.textContent = images.products[indexProducts].name;
    } else {
        imgServices.src = images.services[indexServices].src;
        serviceTitle.textContent = images.services[indexServices].name;
    }
}

next.addEventListener("click", () => {
    indexProducts++;
    indexProducts = formatIndex(indexProducts);
    updateCarousel(indexProducts, "product");
})

prev.addEventListener("click", () => {
    indexProducts--;
    indexProducts = formatIndex(indexProducts);
    updateCarousel(indexProducts, "product");
})


prevServices.addEventListener("click", () => {
    indexServices--;
    indexServices = formatIndex(indexServices);
    updateCarousel(indexServices, "services");
})

nextServices.addEventListener("click", () => {
    indexServices++;
    indexServices = formatIndex(indexServices);
    updateCarousel(indexServices, "services");
})