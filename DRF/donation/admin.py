from django.contrib import admin
from .models import Donation
# Register your models here.
@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display= ['id','donor','wheat','rice','milk','fruits','pin','reciever','status']
