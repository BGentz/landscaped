from django.db import models

# Todo:
# -update max_lengths to better values
# -Add additional classes/fields for additional information
# -Add field validations


class Customer(models.Model):
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True, unique=True)
    password = models.CharField(max_length=255)
    registration_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.first_name + " " + self.last_name

class CustomersHome(models.Model):
    home_nickname = models.CharField(max_length=255)
    address_1 = models.CharField(max_length=255, blank=True)
    address_2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=255, blank=True)
    state = models.CharField(max_length=255, blank=True)
    zip_code = models.CharField(max_length=15, blank=True)
    driveway_sqft = models.IntegerField(blank=True)
    driveway_pictures = models.ImageField(upload_to='driveway_pictures')
    yard_sqft = models.IntegerField(blank=True)
    yard_pictures = models.ImageField(upload_to='yard_pictures')
    additional_information = models.TextField(blank=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)

    def __str__(self):
        return self.customer + " " + self.home_nickname

class Company(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True, unique=True)
    password = models.CharField(max_length=255)
    address_1 = models.CharField(max_length=255, blank=True)
    address_2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=255, blank=True)
    state = models.CharField(max_length=255, blank=True)
    zip_code = models.CharField(max_length=15, blank=True)
    registration_date = models.DateField(auto_now_add=True)
    customers = models.ManyToManyField('CustomersHome')

    def __str__(self):
        return self.name
        