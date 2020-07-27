from rest_framework import serializers
from .models import Customer, Company

# Customer Serializer
class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'first_name', 'last_name', 'email', 'phone_number', 'password', 'address_1', 'address_2', 'city', 'state', 'zip_code', 'registration_date')

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'email', 'phone_number', 'password', 'address_1', 'address_2', 'city', 'state', 'zip_code', 'registration_date')