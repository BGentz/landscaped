from django.urls import path
from . import views

urlpatterns = [
    path('customer/', views.CustomerList.as_view() ),
    path('customer/<int:pk>/', views.CustomerDetails.as_view()),
    path('company/', views.CompanyList.as_view() ),
    path('company/<int:pk>/', views.CompanyDetails.as_view()),
]