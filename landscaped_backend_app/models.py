from django.db import models

# Todo:
# -update max_lengths to better values
# -Add additional classes/fields for additional information
# -Add field validations


class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    password = models.CharField(max_length=255)
    address_1 = models.CharField(max_length=255)
    address_2 = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=15)
    registration_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.first_name + " " + self.last_name

class Company(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    password = models.CharField(max_length=255)
    address_1 = models.CharField(max_length=255)
    address_2 = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=15)
    registration_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name