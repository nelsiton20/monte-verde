from django.db import models

from store.models import Product

# Create your models here.
class FeaturedProduct(models.Model):
    product = models.ForeignKey(Product, null=False, blank=False, on_delete=models.CASCADE, unique=True)
    title = models.CharField(max_length=30, null=False, blank=False)
    content = models.CharField(max_length=75, null=False, blank=False)

    def __str__(self):
        return self.product.name