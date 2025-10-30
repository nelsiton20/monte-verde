from django.contrib.sitemaps import Sitemap
from store.models import Product

class ProductSitemap(Sitemap):
    changefreq = 'weekly'
    priority = 0.8

    def items(self):
        return Product.objects.all()
    
    def lastmod(self, obj):
        return obj.updated_at

    def location(self, obj):
        return f'/store/product/{obj.slug}/'
