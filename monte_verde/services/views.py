from django.shortcuts import render, redirect
from django.contrib import messages
from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse

from services.models import PhoneNumber

def services_view(request):
    number = PhoneNumber.objects.all().order_by('-id').first()

    if request.method == 'POST' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
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
            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    return render(request, 'services.html', { 'number': number })