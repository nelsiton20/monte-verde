from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib import messages

from services.models import PhoneNumber

def index(request):
    number = PhoneNumber.objects.all().order_by('-id').first()

    return render(request, 'inicio.html', { 'number': number })

def us_view(request):
    return render(request, 'us.html')

def mail_check(request):
    return render(request, 'mail-check.html')

def projects(request):
    return render(request, 'projects.html')

def custom_page_not_found(request, exception=None):
    return render(request, '404.html', status=404)