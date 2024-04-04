from django.db import models


# Create your models here.

class Member(models.Model):
    firstName = models.CharField(max_length=250)
    lastName = models.CharField(max_length=250)
    age = models.IntegerField(null=True)
    address = models.CharField(max_length=200, null=True)

    def __str__(self):
        return f"{self.firstName} {self.lastName}"
