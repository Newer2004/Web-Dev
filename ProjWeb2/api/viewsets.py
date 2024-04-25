from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth.models import User
from django.db.models import Q

from .permissions import IsOwnerOrReadOnly
from .models import Photo, Album, Like
from .serializers import PhotoSerializer, AlbumSerializer, AlbumDetailSerializer, AlbumTerseSerializer, \
    UserSerializer
from djangorestframework_camel_case.parser import CamelCaseJSONParser  # Import CamelCaseJSONParser

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    parser_classes = (MultiPartParser, FormParser, CamelCaseJSONParser)

    def get_permissions(self):
        if hasattr(self, 'action') and self.action == 'set_like':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]
        return super().get_permissions()

    def get_queryset(self):
        queryset = Photo.objects.all()
        user_id = self.request.query_params.get('user_id', None)
        user = self.request.user
        available_albums = Album.objects.all().filter(Q(user_id=user.id) | Q(private=False))
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        queryset = queryset.filter(Q(album__in=available_albums) | Q(album=None))
        return queryset

    def perform_update(self, serializer):
        if 'album_id' in self.request.data:
            try:
                serializer.save(user=self.request.user, album_id=self.request.data['album_id'])
            except:
                serializer.save(user=self.request.user, album_id=None)
        else:
            serializer.save(user=self.request.user)

    def perform_create(self, serializer):
        if 'albumId' in self.request.data:
            try:
                serializer.save(user=self.request.user, album_id=self.request.data['albumId'])
            except:
                serializer.save(user=self.request.user, album_id=None)
        else:
            serializer.save(user=self.request.user)

    @action(detail=True, methods=['POST'])  # Use @action instead of detail_route
    def set_like(self, request, pk=None):
        user_id = self.request.data['user_id']
        user = User.objects.get(id=user_id)
        photo = Photo.objects.get(id=pk)
        if user_id == photo.user_id:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        if Like.objects.filter(user_id=user_id, photo_id=photo.id).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            like = Like(photo=photo, user=user)
            like.save()
            return Response(status=status.HTTP_200_OK)


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    permission_classes = (IsOwnerOrReadOnly, IsAuthenticated)

    def get_queryset(self):
        queryset = Album.objects.all()
        user_id = self.request.query_params.get('user_id', None)
        user = self.request.user
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        queryset = queryset.filter(Q(user_id=user.id) | Q(private=False))
        return queryset

    def get_serializer_class(self):
        if hasattr(self, 'action') and self.action == 'retrieve':
            return AlbumDetailSerializer
        if self.request.query_params.get('terse', False):
            return AlbumTerseSerializer
        return AlbumSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
