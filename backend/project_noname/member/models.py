from django.db import models

# class Member
# username max 10자
# password max 10자
# name
# email max 무한


class Member(models.Model):
    username = models.CharField(max_length=10)
    password = models.CharField(max_length=10)
    name = models.TextField()
    email = models.EmailField()
    # email = models.EmailField() EmailField -> 가능하나, 새로 Insert할 때 a@b.c 형태가 아니면 에러 터짐

    class Meta:
        managed = True
        db_table = 'members'
