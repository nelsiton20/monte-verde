from django.db import models

from store.models import Product

# Create your models here.
class FeaturedProduct(models.Model):
    product = models.ForeignKey(Product, null=False, blank=False, on_delete=models.CASCADE, unique=True)
    content = models.CharField(max_length=70, null=False, blank=False)

    def __str__(self):
        return self.product.name