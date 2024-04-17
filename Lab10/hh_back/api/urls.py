from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    path('companies/<int:pk>/vacancies/', views.CompanyViewSet.as_view({'get': 'list_vacancies'}), name='list of vacancies of company'),
    path('vacancies/top_ten/', views.VacancyViewSet.as_view({'get': 'list_top10'}), name='list of top ten vacancies'),
]

r = DefaultRouter()
r.register(r'vacancies', views.VacancyViewSet, basename='vacancy')
r.register(r'companies', views.CompanyViewSet, basename='Company')

urlpatterns += r.urls
