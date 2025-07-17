from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.conf import settings

def index(request):
    return render(request, 'inicio.html')

def services_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        service = request.POST.get('service')
        message = request.POST.get('message')

        subject = f'Quiero el servicio: {service}'
        message_body = f'Nombre: {name}\nNúmero: {phone}\n\n{message}'
        from_email = settings.DEFAULT_FROM_EMAIL 
        recipient_list = ['nelsonrca2006@gmail.com']

        try:
            send_mail(subject, message_body, from_email, recipient_list)
            return redirect('home')
        except Exception as e:
            return redirect('store')

    return render(request, 'services.html')

def us_view(request):
    return render(request, 'us.html')

def mail_check(request):
    return render(request, 'mail-check.html')