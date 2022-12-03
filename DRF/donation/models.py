from django.db import models
from account.models import User

# Create your models here.
class Donation(models.Model):
    donor=models.EmailField(default="xyz@gmail.com")
    wheat=models.IntegerField()
    rice=models.IntegerField()
    milk=models.IntegerField()
    fruits=models.IntegerField()
    pin=models.IntegerField()
    reciever=models.EmailField(default="xyz@gmail.com")
    status=models.IntegerField(default=0)
