from .models import Customer, Company
from .serializers import CustomerSerializer, CompanySerializer
from rest_framework import viewsets, permissions

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly)

# class CustomerDetails(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Customer.objects.all()
#     serializer_class = CustomerSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly)


# class CompanyDetails(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Company.objects.all()
#     serializer_class = CompanySerializer