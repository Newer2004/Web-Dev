from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

from rest_framework import viewsets


class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

    def list_vacancies(self, request, pk=None):
        queryset = Vacancy.objects.all().filter(company=pk).order_by('-salary')[:10]
        serializer = VacancySerializer(queryset, many=True)
        return Response(serializer.data)


class VacancyViewSet(viewsets.ModelViewSet):
    serializer_class = VacancySerializer
    queryset = Vacancy.objects.all()

    def list_top10(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
