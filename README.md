# MODO DEBUG
Si esta en modo *debug=False* en producción podras ver los logs de la aplicación en caso de 
ocurrir errores durante la ejecución.

# HttpRespons
Permite responder a una peticion, devolviendo un codigo.Es una clase en Django que se usa para devolver una respuesta
HTTP desde una vista.Cuando una vista en django procesa una solicitud(request) debe devolver una respuesta(response).Esta respuesta se encapsula en un objeto 'HttpResponse'.

# Templates
Django nos ofrece la posibilidad de utilizar plantillas HTML (en inglés templates) mucho más cómodas y repletas de funcionalidades.
> MVT(Modelo-Vist-Template)
> 
#  highlight.js
Se usa highlight.js en conjunto con CKEditor para resaltar codigo.
> ('highlight')['https://highlightjs.org/demo']

> ('highlight')['https://highlightjs.readthedocs.io/en/latest/']

# Configuracion
# Crear un Entorno Virtual
```bash
python -m venv myenv
```
Esto creará un entorno virtual llamado "myenv" donde podrás gestionar las dependencias de tu proyecto de manera aislada.

# Activar el Entorno Virtual (en Windows)
```bash
myenv\Scripts\activate
```
En sistemas Unix o macOS, utiliza el siguiente comando para activar el entorno virtual:
```bash
source myenv/bin/activate
```

# Instalar Django 4.2
Dentro del entorno virtual activado, ejecuta el siguiente comando para instalar Django 4.2:
```bash
pip install Django==4.2
```

#  Crear un Proyecto Django
```bash
django-admin startproject myproject
```
Esto creará un proyecto Django llamado "myproject". Puedes cambiar el nombre a tu gusto.

# Aplicar Migraciones
```bash
pip freeze > requirements.txt
pip install -r requirements.txt
python manage.py collectstatic
python manage.py makemigrations
python manage.py migrate
```
Esto aplicará las migraciones necesarias para crear las tablas de la base de datos.

# Crear un Superusuario (Opcional)
Si deseas acceder al panel de administración de Django, puedes crear un superusuario con este comando:
```bash
python manage.py createsuperuser
```

**Paso 8: Ejecutar el Servidor de Desarrollo**
```bash
python manage.py runserver
```