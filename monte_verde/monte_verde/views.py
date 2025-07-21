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
    return render(request, 'us.html')

def mail_check(request):
    return render(request, 'mail-check.html')

def projects(request):
    return render(request, 'projects.html')