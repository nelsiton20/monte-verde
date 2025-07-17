from django.db import models

# Create your models here.
class PhoneNumber(models.Model):
    number = models.CharField(max_length=9, null=False, blank=False)

    def __str__(self):
        return self.number