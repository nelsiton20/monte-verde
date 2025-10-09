from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib import messages

from services.models import PhoneNumber
from featured_products.models import FeaturedProduct

def index(request):
    number = PhoneNumber.objects.all().order_by('-id').first()
    featured_products = FeaturedProduct.objects.all()

    return render(request, 'inicio.html', { 'number': number, 'featured_products' : featured_products })

def us_view(request):
    number = PhoneNumber.objects.all().order_by('-id').first()
    return render(request, 'us.html', { 'number': number })

def mail_check(request):
    return render(request, 'mail-check.html')

def projects(request):
    number = PhoneNumber.objects.all().order_by('-id').first()
    return render(request, 'projects.html', { 'number': number })

def custom_page_not_found(request, exception=None):
    return render(request, '404.html', status=404)