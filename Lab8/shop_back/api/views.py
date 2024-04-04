import json

from django.http import JsonResponse
from .models import Category, Product


def getProducts(request):
    if request.method == "GET":
        products = Product.objects.all()
        products = [prod.to_json() for prod in products]
        return JsonResponse(products, safe=False, json_dumps_params={'indent': 2}, status=200)


def getProductById(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(product.to_json(), safe=False, json_dumps_params={'indent': 2}, status=200)


def getCategories(request):
    categories = Category.objects.all()

    categories = [cat.to_json() for cat in categories]

    return JsonResponse(categories, safe=False, json_dumps_params={'indent': 2}, status=200)


def getCategoryById(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(category.to_json(), safe=False, json_dumps_params={'indent': 2}, status=200)


def getProductsByCategory(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    productsByCat = Product.objects.filter(category=id)

    productsByCat = [prod.to_json() for prod in productsByCat]

    return JsonResponse(productsByCat, safe=False, json_dumps_params={'indent': 2})
