from django.urls import path
from rest_framework import routers
from . import views

router = routers.SimpleRouter()
router.register(r'customers', UserViewSet)
router.register(r'companies', AccountViewSet)
urlpatterns = router.urls

urlpatterns = [
    path('customer/', views.CustomerList.as_view() ),
    path('customer/<int:pk>/', views.CustomerDetails.as_view()),
    path('company/', views.CompanyList.as_view() ),
    path('company/<int:pk>/', views.CompanyDetails.as_view()),
]