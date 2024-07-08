from django.db import models
from ckeditor.fields import RichTextField


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name='Titulo')
    description = RichTextField(verbose_name='Descripción')
    image = models.ImageField(verbose_name='Imagen', upload_to='projects', null=True, blank=True)
    link = models.URLField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creacion')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualizacion')

    class Meta:
        verbose_name = 'projecto'
        verbose_name_plural = 'projectos'
        ordering = ['-created']

    def __str__(self):
        return self.title
