from django.shortcuts import get_object_or_404, render

from .models import Product, Category

# Create your views here.
def store(request):
    products = Product.objects.all()
    categories = Category.objects.all()
    
    return render(request, 'store/tienda.html', {
        'products': products, 
        'categories': categories
    })
    
def store_by_category(request, slug):
    category = get_object_or_404(Category, slug=slug)
    products = category.product_set.all()
    categories = Category.objects.all()
    
    return render(request, 'store/category.html', {
        "products": products,
        'categories': categories
    })