from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .viewsets import CustomerViewSet, CompanyViewSet

router = routers.DefaultRouter()
router.register(r'customers', CustomerViewSet)
router.register(r'companies', CompanyViewSet)
urlpatterns = router.urls

urlpatterns = [
    path('', include(urlpatterns)),
    path('auth/', include('rest_framework.urls')),
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view())
]