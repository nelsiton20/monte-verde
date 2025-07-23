const summaryContainer = document.querySelector('.cart--main-container');
const emptyShopping = document.querySelector('.empty-shopping-cart');


// función para añadir productos a la sección de productos
function addProductsToShoppingCartSection(productList){
    const cartContainer = document.querySelector('.cart-container');
    //const productsContainer = document.querySelector('.products-container');
    const productsContainer = document.createElement('section');
    productsContainer.classList.add('products-container');

    productList.forEach((product) => {
        // creando elementos html 
        const article = document.createElement('article');
        const name = document.createElement('h4');
        const price = document.createElement('p');
        const countContainer = document.createElement('div');
        const cantidad = document.createElement('p');
        const plusButton = document.createElement('button');
        const lessButton = document.createElement('button');

        // Añadir estilos a los elementos html
        article.classList.add('product-item');
        name.classList.add('product-item--info');
        price.classList.add('product-item--info');
        cantidad.classList.add('product-item--info');
        countContainer.classList.add('product-item--count-container');
        plusButton.classList.add('plus-button');
        lessButton.classList.add('less-button');

        // Asignándoles su contenido 
        name.textContent = product.name;
        price.textContent = `S/${product.price}`;
        cantidad.textContent = product.count;
        plusButton.textContent = '+';
        lessButton.textContent = '-';

        // Añadiendo elementos al countContainer
        countContainer.appendChild(lessButton);
        countContainer.appendChild(cantidad);
        countContainer.appendChild(plusButton);        

        const itemList = [{name: 'name', value: name}, {name: 'price', value: price}, {name: 'cantidad', value: countContainer}];

        itemList.forEach((i) => {
            const productContainer = document.createElement('div');
            productContainer.classList.add(i.name == 'name' ? 'product--item-container-main' : 'product--item-container');
            productContainer.appendChild(i.value);
            article.appendChild(productContainer);
        })

        productsContainer.appendChild(article);
    })

    cartContainer.appendChild(productsContainer);
}

// función para hallar el precio total
function getPriceTotal(productList){
    let priceTotal = 0;

    productList.forEach((p) => priceTotal += parseInt(p.price));
    return priceTotal;
}

// función para añadir la cantidad de productos
function showCountProducts(countProducts){
    const count = document.querySelector('.order--count');
    count.textContent = `(${countProducts})`
}

// función para añadir el precio total de productos
function addPriceOfProducts(totalPrice){
    const price = document.querySelector('.order--product-price');
    price.textContent = `S/${totalPrice}`;
}

// función de envío de mensaje
function sendMessage(data){
    const number = document.getElementById('number').value;
    const telefono = `51${number}`;
    const mensaje = data;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// función que retornar el contenido del mensaje a enviar
function getDataForTheMessage(productList){
    let message = "Hola, esta es mi lista de productos seleccionados:";

    productList.forEach((p, i) => message += `\n${i+1}. *${p.name}* - ${p.count} ${p.count > 1 ? 'unidades' : 'unidad'} - C/U (${p.price})`)

    message += `\nTotal: S/${getPriceTotal(productList)}`;
    return message;
}

// Función de carga de productos al html
function loadProductsToPage(){
    if(JSON.parse(localStorage.getItem('shopping_cart')).length > 0 ){
        console.log('todavía hay elementos');
        const productList = JSON.parse(localStorage.getItem('shopping_cart'));

        // AÑADIR PRODUCTOS A LA SECCIÓN DE PRODUCTOS
        addProductsToShoppingCartSection(productList);

        // MOSTRAR LA CANTIDAD DE PRODUCTOS
        showCountProducts(productList.length);

        // MOSTRAR EL PRECIO TOTAL
        addPriceOfProducts(getPriceTotal(productList));

        // REASIGNAR EVENTOS A LOS BOTONES +
        assignPlusButtonEvents();

        // REASIGNAR EVENTOS A LOS BOTONES -
        assignLessButtonEvents();
    } else {
        summaryContainer.classList.add('hidden');
        emptyShopping.classList.remove('hidden');
    }
}

function assignPlusButtonEvents(){
    const plusButtons = document.querySelectorAll('.plus-button');

    plusButtons.forEach((b, i) => {
        b.addEventListener('click', () => {
            addOneToProduct(i);
            removeProductContainer();
            loadProductsToPage();
        });
    });
}

function assignLessButtonEvents(){
    const lessButtons = document.querySelectorAll('.less-button');

    lessButtons.forEach((b, i) => {
        b.addEventListener('click', () => {
            removeOneToProduct(i);
            removeProductContainer();
            loadProductsToPage();
        })
    })
}

if(localStorage.getItem('shopping_cart')){
    emptyShopping.classList.add('hidden');    

    // cargar elementos al dom
    loadProductsToPage();
} else {
    summaryContainer.classList.add('hidden');
}

// función para el evento de envío de mensaje 
function sendMessageToWhatsApp(){
    const products = JSON.parse(localStorage.getItem('shopping_cart'));
    let messageData = getDataForTheMessage(products);
    sendMessage(messageData);
}

// evento de envío de mensaje
if(document.querySelector('.order--button')){
    console.log('existe fuera del if');
    const messageButton = document.querySelector('.order--button');

    messageButton.addEventListener('click', () => {
        sendMessageToWhatsApp();
    })
}

// función para aumentar (+1) a un producto
function addOneToProduct(i){
    const products = JSON.parse(localStorage.getItem('shopping_cart'));
    const productSelected = products[i];
    const newCount = parseInt(productSelected.count) + 1;

    products[i] = {...productSelected, count: newCount};
    localStorage.setItem('shopping_cart', JSON.stringify(products));
}

// función para actualizar cantidad de productos del carrito
function updateProductCount(count){
    const cartValue = document.querySelectorAll('.shopping-cart--count');

    cartValue.forEach(cart => {
        cart.textContent = count;
    })
}

function removeOneToProduct(i){
    const products = JSON.parse(localStorage.getItem('shopping_cart'));
    const productSelected = products[i];

    if(productSelected.count <= 1){
        products.splice(i, 1);
        localStorage.setItem('shopping_cart', JSON.stringify(products));
        updateProductCount(products.length)
    } else {
        const newCount = parseInt(productSelected.count) - 1;

        products[i] = {...productSelected, count: newCount};
        localStorage.setItem('shopping_cart', JSON.stringify(products));
    }
}

// función para quitar el contenedor de productos del dom
function removeProductContainer(){
    const productsContainer = document.querySelector('.products-container');
    productsContainer.remove();
    console.log('se removió el contenedor')
}