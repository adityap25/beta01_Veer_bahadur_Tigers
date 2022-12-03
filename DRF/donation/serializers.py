from rest_framework import serializers
from .models import Donation

class DonationSerializer(serializers.Serializer):

    donor=serializers.EmailField()
    wheat=serializers.IntegerField()
    rice=serializers.IntegerField()
    milk=serializers.IntegerField()
    fruits=serializers.IntegerField()
    pin=serializers.IntegerField()
    reciever=serializers.EmailField()
    status=serializers.IntegerField(default=0)

    def create(self,validate_data):
        return Donation.objects.create(**validate_data)
    def update(self,instance,validate_data):
        instance.donor=validate_data.get('donor',instance.donor)
        instance.wheat=validate_data.get('wheat',instance.wheat)
        instance.rice=validate_data.get('rice',instance.rice)
        instance.milk=validate_data.get('milk',instance.milk)
        instance.fruits=validate_data.get('fruits',instance.fruits)
        instance.pin=validate_data.get('pin',instance.pin)
        instance.reciever=validate_data.get('reciever',instance.reciever)
        instance.status=validate_data.get('status',instance.status)
        instance.save()
        return instance