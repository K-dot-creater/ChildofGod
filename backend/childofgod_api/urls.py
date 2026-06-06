from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from apps.products.views import ProductViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
