from django.shortcuts import render

def index(request):
    return render(request, 'inicio.html')

def services_view(request):
    return render(request, 'services.html')

def us_view(request):
    return render(request, 'us.html')