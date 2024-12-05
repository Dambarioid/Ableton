from django.db import models

# Create your models here.
class users (models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    gender = models.CharField(max_length=20)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    phone = models.CharField(max_length=1002)
    def __str__(self):
        return self.username

