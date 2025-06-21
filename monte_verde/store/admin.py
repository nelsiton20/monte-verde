from django.contrib import admin
from . import models

class CategoryAdmin(admin.ModelAdmin):
    exclude = ('slug',)
    
class ProductAdmin(admin.ModelAdmin):
    exclude = ('slug',)

# Register your models here.
admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Product, ProductAdmin)