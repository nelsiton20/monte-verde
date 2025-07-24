import uuid
from django.db import models

from django.utils.text import slugify
from django.db.models.signals import pre_save

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False, unique=True)
    slug = models.SlugField(null=False, blank=False, unique=True)
    
    def __str__(self):
        return self.name
    

class Product(models.Model):
    name = models.CharField(max_length=200, null=False, blank=False, unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    slug = models.SlugField(null=False, blank=False, unique=True)
    image = models.ImageField(upload_to='products/', null=False, blank=False)
    category = models.ForeignKey(Category, null=False, blank=False, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    

def generate_unique_slug(instance, model_class, field_value):
    slug = slugify(field_value)
    original_slug = slug
    while model_class.objects.filter(slug=slug).exists():
        slug = slugify(f'{original_slug}-{uuid.uuid4().hex[:8]}')
    return slug    

def set_slug_category(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = generate_unique_slug(instance, Category, instance.name)

def set_slug_product(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = generate_unique_slug(instance, Product, instance.name)
        
pre_save.connect(set_slug_category, sender=Category)
pre_save.connect(set_slug_product, sender=Product)