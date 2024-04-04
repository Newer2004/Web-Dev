from django.shortcuts import render

from django.http import HttpResponse
from django.template import loader
from .models import Member


# Create your views here.

def main(req):
    template = loader.get_template('main.html')
    return HttpResponse(template.render())


def sayHello(req):
    template = loader.get_template('index1.html')
    return HttpResponse(template.render())


def showMembers(req):
    members = Member.objects.all().values()

    template = loader.get_template('members.html')
    context = {
        'members': members
    }
    return HttpResponse(template.render(context, req))


def showDetails(req, id):
    member = Member.objects.all().get(id=id)

    template = loader.get_template('details.html')

    context = {
        'member': member
    }

    return HttpResponse(template.render(context, req))
