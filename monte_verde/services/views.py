from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from django.core.mail import send_mail

from services.models import PhoneNumber

def services_view(request):
    number = PhoneNumber.objects.all().order_by('-id').first()

    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        service = request.POST.get('service')
        message = request.POST.get('message')

        subject = f'Quiero el servicio: {service}'
        message_body = f'Nombre: {name}\nNúmero: {phone}\n\n{message}'
        from_email = settings.DEFAULT_FROM_EMAIL 
        recipient_list = ['ericka@viveromonteverde.com']

        try:
            send_mail(subject, message_body, from_email, recipient_list)
            messages.success(request, '¡El mensaje se ha enviado correctamente!')
        except Exception as e:
            messages.error(request, 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.')

        return redirect('services')

    return render(request, 'services.html', { 'number': number })