from django.db import models


class PostVO(models.Model):
    # id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'posts'

    def __str__(self):
        return f'{self.pk} is username = {self.id}' \
               f'title = {self.title},' \
               f'content = {self.content},' \
               f'created_at = {self.created_at},' \
               f'updated_dat = {self.updated_at}'
