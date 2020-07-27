from .models import Customer, Company
from .serializers import CustomerSerializer, CompanySerializer
from rest_framework import viewsets, permissions

# Customer ViewSet
"""
"""
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CustomerSerializer

# class CustomerDetails(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Customer.objects.all()
#     serializer_class = CustomerSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly)
    serializer_class = CompanySerializer


# class CompanyDetails(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Company.objects.all()
#     serializer_class = CompanySerializer