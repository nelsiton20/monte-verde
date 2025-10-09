from django.shortcuts import get_object_or_404, render
from django.core.paginator import Paginator

from .models import Product, Category
from services.models import PhoneNumber

# Create your views here.
def store(request):
    products = Product.objects.all()
    categories = Category.objects.all()
    number = PhoneNumber.objects.all().order_by('-id').first()

    paginator = Paginator(products, 50)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'store/tienda.html', {
        'products': products, 
        'categories': categories,
        'page_obj': page_obj,
        'number': number
    })
    
def store_by_category(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = category.product_set.all()
    categories = Category.objects.all()
    number = PhoneNumber.objects.all().order_by('-id').first()

    paginator = Paginator(products, 50)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    return render(request, 'store/tienda.html', {
        "products": products,
        'categories': categories,
        'number': number,
        'page_obj': page_obj
    })

def search(request):
    query = request.GET.get('q')
    resultados = []
    categories = Category.objects.all()
    number = PhoneNumber.objects.all().order_by('-id').first()

    if query:
        resultados = Product.objects.filter(name__icontains=query)

    paginator = Paginator(resultados, 50)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'store/tienda.html', {
        'query': query,
        'products': resultados,
        'categories': categories,
        'number': number,
        'page_obj': page_obj
    })

def shopping_cart(request):
    number = PhoneNumber.objects.all().order_by('-id').first()

    return render(request, 'store/shopping-cart.html', { 'number': number })

def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    return render(request, 'store/product-detail.html', {'product': product})