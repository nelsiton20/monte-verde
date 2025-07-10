const buttons = document.querySelectorAll('.button');
const servicesTitle = document.querySelectorAll('.description--title');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        sendMessage(servicesTitle[i].textContent);        
    })
}

function sendMessage(service){
    const telefono = "51924421097"; 
    const mensaje = `Hola, quisiera más información acerca del servicio de ${service}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
