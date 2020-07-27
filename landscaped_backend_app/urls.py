from django.urls import path, include
from rest_framework import routers
from .viewsets import CustomerViewSet, CompanyViewSet

router = routers.DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'companies', CompanyViewSet)

urlpatterns = router.urls

# urlpatterns = [
#     path('', include(urlpatterns))
# ]