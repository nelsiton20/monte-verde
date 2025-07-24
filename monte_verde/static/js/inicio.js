const buttons = document.querySelectorAll('.service-container--info-container--button');
const services = document.querySelectorAll('.title-container--content');
const phone = document.getElementById('contact-article--phone');

const number = document.getElementById('number').value;

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        sendMessageToWhatsApp(services[i].textContent);
    })
}

phone.addEventListener('click', () => {
    sendMessageOfContact();
})

function sendMessageToWhatsApp(service){
    const telefono = `51${number}`;
    const mensaje = `Hola, me gustaría recibir más información sobre el servicio: *${service}*. Quedo atento a su respuesta.`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

function sendMessageOfContact(){
    const telefono = `51${number}`;
    const mensaje = '¡Hola! Estuve viendo su página web y quería hacer unas consultas. ¿Podría ayudarme?';
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
