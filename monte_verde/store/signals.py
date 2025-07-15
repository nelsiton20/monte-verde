from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.core.files.storage import default_storage
from store.models import Product

@receiver(pre_delete, sender=Product)
def delete_img_s3(sender, instance, **kwargs):
    if instance.imagen:
        imagen_url = instance.image.name 

        try:
            default_storage.delete(imagen_url)
        except Exception as e:
            print(f"Error al eliminar la imagen {imagen_url}: {str(e)}")