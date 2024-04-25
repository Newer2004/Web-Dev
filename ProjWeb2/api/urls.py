from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from rest_framework.routers import DefaultRouter
from .viewsets import AlbumViewSet, PhotoViewSet, UserViewSet
from .auth.views import RegisterView, LoginView, LogoutView


router = DefaultRouter(trailing_slash=False)

router.register(r'albums', AlbumViewSet)
router.register(r'photos', PhotoViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view()),
    path('register/', RegisterView.as_view()),
    path('logout/', LogoutView.as_view())
]
