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

function hideMessageContainer(){
    const message = document.querySelector('.message-container');
    const x = document.querySelector('.message-container--img');

    x.addEventListener('click', () => {
        message.classList.add('hide');
    })

    setTimeout(() => {
        message.classList.add('hide');
    }, 5000)
}

function removeClassToMessageContainer(){
    const messageContainer = document.querySelector('.message-container');
    const contentContainer = document.querySelector('.message-container--content-container');

    messageContainer.classList.remove('show', 'hide');
    contentContainer.classList.remove('success', 'error');
}

document.getElementById('service-form').addEventListener('submit', function(e) {
    e.preventDefault();
    removeClassToMessageContainer();
    const form = e.target;
    const data = new FormData(form);

    fetch(serviceFormURL, {
        method: 'POST',
        headers: {
            'X-CSRFToken': data.get('csrfmiddlewaretoken'),
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: data
    })
    .then(response => response.json())
    .then(result => {
        const msgContainer = document.querySelector('.message-container');
        msgContainer.classList.add('show');
        const contentContainer = document.querySelector('.message-container--content-container');
        const p = document.getElementById('content-container--text');
        if (result.success) {
            contentContainer.classList.add('success');
            p.textContent = '¡El mensaje se ha enviado correctamente!';
            form.reset();
        } else {
            contentContainer.classList.add('error');
            p.textContent = "Hubo un error al enviar el mensaje. Intenta de nuevo.";
        }
    })
    .catch(error => {
        document.querySelector('.message-container').classList.add('show');
        document.querySelector('.message-container--content-container').classList.add('error');
        document.getElementById('content-container--text').textContent = "Ocurrió un problema.";
    });

    hideMessageContainer();
});