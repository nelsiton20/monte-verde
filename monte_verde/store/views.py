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
    
    return render(request, 'store/tienda.html', {
        "products": products,
        'categories': categories
    })

def search(request):
    query = request.GET.get('q')
    resultados = []
    categories = Category.objects.all()

    if query:
        resultados = Product.objects.filter(name__icontains=query)

    return render(request, 'store/tienda.html', {
        'query': query,
        'products': resultados,
        'categories': categories
    })

def shopping_cart(request):
    return render(request, 'store/shopping-cart.html')

def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    return render(request, 'store/product-detail.html', {'product': product})