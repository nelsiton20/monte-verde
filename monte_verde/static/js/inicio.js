const buttons = document.querySelectorAll('.service-container--info-container--button');
const services = document.querySelectorAll('.title-container--content');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        sendMessageToWhatsApp(services[i].textContent);
    })
}

function sendMessageToWhatsApp(service){
    const telefono = "51924421097"
    const mensaje = `Hola, quisiera más información acerca del servicio: ${service}`
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
