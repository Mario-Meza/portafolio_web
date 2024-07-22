from django.db import models
from froala_editor.fields import FroalaField


class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name='Titulo')
    description = FroalaField(
        plugins=(
            'font_size', 'font_family', 'align',
            'code_view', 'colors', 'draggable',
            'emoticons', 'inline_style', 'lists', 'paragraph_format', 'quote', 'file', 'image_manager', 'image'),
        theme='dark', verbose_name='Descripción')
    image = models.ImageField(verbose_name='Imagen', upload_to='projects', null=True, blank=True)
    link = models.URLField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, verbose_name='Fecha de creacion')
    updated = models.DateTimeField(auto_now=True, verbose_name='Fecha de actualizacion')
    tags = models.ManyToManyField(Tag, blank=True)

    class Meta:
        verbose_name = 'projecto'
        verbose_name_plural = 'projectos'
        ordering = ['-created']

    def __str__(self):
        return self.title
