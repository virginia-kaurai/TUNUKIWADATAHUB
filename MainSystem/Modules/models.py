from datetime import timedelta
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone


//just comment

class User(AbstractUser):
    phone = models.CharField(max_length=15, unique=True)

class DataPackage(models.Model):
    name = models.CharField(max_length=100)
    data_size = models.CharField(max_length=20)
    price =models.DecimalField(max_digits=10, decimal_places=2)
   
    duration= models.CharField(max_length=20)

class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    package = models.ForeignKey(DataPackage, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status=models.CharField(max_length=20,choices=[('pending',"Pending"),("success","Success"),("failed","Failed")])
    created_at = models.DateTimeField(auto_now_add =True)



class Subscription(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    package = models.ForeignKey(DataPackage, on_delete=models.CASCADE)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()
    is_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.end_date:
            self.end_date = timezone.now() + timedelta(days=self.package.duration)
        super().save(*args, **kwargs)