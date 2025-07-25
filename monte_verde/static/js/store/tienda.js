const filterButton = document.querySelector('.filter-button');
const categoriesContainer = document.querySelector('.categories-container');
const backgroundContainer = document.querySelector('.background-categories-container');
const bodyTienda = document.body;

// Eventos para mostrar / ocultar filtros en pantallas pequeñas

filterButton.addEventListener("click", () => {
    categoriesContainer.classList.toggle('show');
    backgroundContainer.classList.toggle('show');
    body.classList.toggle('no-scroll');
})

backgroundContainer.addEventListener("click", () => {
    categoriesContainer.classList.remove('show');
    backgroundContainer.classList.remove('show');
    body.classList.remove('no-scroll');
})


// Eventos para agregar productos al carrito

// función para saber si el producto ya existe
function isExistsProduct(productList, product){
    const productsFiltered = productList.filter(p => p.name == product)

    return productsFiltered.length > 0;
}

// función para obtener la cantidad del producto
function getCountOfProduct(product){
    const products = JSON.parse(localStorage.getItem('shopping_cart'));
    const productFiltered = products.filter(p => p.name == product);
    return productFiltered[0].count;
}

// función para obtener lista de productos actualizadas
function getNewProductList(productList, productName, count, price){
    return productList.map((p) => {
        if(p.name == productName){
            return {...p, count, price}
        }

        return p;
    })
}

// función para agregar productos al item del localStorage
function addProductToItem(product, price){
    if(localStorage.getItem('shopping_cart')){
        const products = JSON.parse(localStorage.getItem('shopping_cart'));

        let newProductList;

        if(isExistsProduct(products, product)){
            const count = getCountOfProduct(product) + 1;
            console.log(count)
            newProductList = getNewProductList(products, product, count, price);
        } else {
            const newProduct = {name: product, count: 1, price};
            newProductList = [...products, newProduct];
        }
        
        localStorage.setItem('shopping_cart', JSON.stringify(newProductList));
    } else {
        const newProduct = {'name': product, 'count': 1, price}
        localStorage.setItem('shopping_cart', JSON.stringify([newProduct]));
    }

    updateCountOfProducts();
    showProductAddedNotification();
}

// función para actualizar cantidad de productos del ícono del carrito
function updateCountOfProducts(){
    const products = JSON.parse(localStorage.getItem('shopping_cart'));
    const count = document.querySelectorAll('.shopping-cart--count');
    const value = products.length <= 9 ? products.length : '+9';

    count.forEach(c => {
        c.textContent = value;
    })
}

const productsName = document.querySelectorAll('.product--name');
const productButton = document.querySelectorAll('.product--button');
const prices = document.querySelectorAll('.price-sale');

for(let i=0; i < productButton.length; i++){
    productButton[i].addEventListener('click', (evt) => {
        evt.stopPropagation();
        addProductToItem(productsName[i].textContent, prices[i].textContent);
    })
}

// función para mostrar notificación de producto agregado al carrito
function showProductAddedNotification(){
    const notification = document.querySelector('.notification-product-container');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 1000);
}


// FUNCIÓN PARA REDIRIGIR A DETALLES DEL PRODUCTO 
const productsContainer = document.querySelectorAll('.product-container');

productsContainer.forEach((product) => {
    product.addEventListener('click', function() {
        const slug = this.dataset.slug;
        window.location.href = `/store/product/${slug}/`;
    })
})