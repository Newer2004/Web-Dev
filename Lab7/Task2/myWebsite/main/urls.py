from django.urls import path

from . import views

urlpatterns = [
    path('', views.main, name='main page'),
    path('hello/', views.sayHello, name="say hello"),
    path('members/', views.showMembers, name='show all members'),
    path('members/details/<int:id>', views.showDetails, name='show details')
]