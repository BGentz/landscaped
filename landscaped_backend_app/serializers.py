from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import Customer, Company

class CustomerSerializer(serializers.HyperlinkedModelSerializer):

    def set_password(self, password):
        self.Meta.model['password'] = password

    class Meta:
        model = Customer
        fields = ('id', 'first_name', 'last_name', 'email', 'phone_number', 'password', 'address_1', 'address_2', 'city', 'state', 'zip_code', 'registration_date')

class CustomerSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = Customer
        fields = ('token', 'email', 'password')

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'email', 'phone_number', 'password', 'address_1', 'address_2', 'city', 'state', 'zip_code', 'registration_date')