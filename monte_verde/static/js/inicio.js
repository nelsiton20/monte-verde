const buttons = document.querySelectorAll('.service-container--info-container--button');
const services = document.querySelectorAll('.title-container--content');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        sendMessageToWhatsApp(services[i].textContent);
    })
}

function sendMessageToWhatsApp(service){
    const number = document.getElementById('number').value;
    const telefono = `51${number}`
    const mensaje = `Hola, me gustaría recibir más información sobre el servicio: ${service}. Quedo atento a su respuesta.`
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
