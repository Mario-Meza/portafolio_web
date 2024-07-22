from .models import Project
from .models import Tag
from django.contrib import admin


class TagAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'updated')
    search_fields = ('title',)
    list_filter = ('tags',)


admin.site.register(Project, ProjectAdmin)
admin.site.register(Tag, TagAdmin)
