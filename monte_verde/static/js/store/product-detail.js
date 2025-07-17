const button = document.querySelector('.info-container--button');

function addProductToShoppingCart(productName, price){
    if(localStorage.getItem('shopping_cart')){
        const products = JSON.parse(localStorage.getItem('shopping_cart'));

        let exits = false;

        let newProduct = products.map((p) => {
            if(p.name == productName){
                exits = true;
                const count = parseInt(p.count) + 1;
                return { name: productName, count, price };
            } else {
                return p;
            }
        })

        if(!exits){
            newProduct = [...newProduct, {name: productName, count: 1, price}];
        }

        localStorage.setItem('shopping_cart', JSON.stringify(newProduct));
    } else {
        const newProduct = {name: productName, count: 1, price: price};
        localStorage.setItem('shopping_cart', JSON.stringify([newProduct]));
    }
}

button.addEventListener('click', () => {
    const name = document.querySelector('.info-container--name').textContent;
    const price = document.querySelector('.price--content').textContent;

    addProductToShoppingCart(name, price);
    showProductAddedNotification();
    updateCountShoppingCart();
})


// función para mostrar notificación de producto agregado al carrito
function showProductAddedNotification(){
    const notification = document.querySelector('.notification-product-container');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 1000);
}

// función para actualizar cantidad de productos en el ícono del carrito
function updateCountShoppingCart(){
    const span = document.querySelectorAll('.shopping-cart--count');
    const count = JSON.parse(localStorage.getItem('shopping_cart'));
    const value = count.length <= 9 ? count.length : '+9';

    span.forEach(s => {
        s.textContent = value;
    })
}