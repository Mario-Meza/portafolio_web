#!/bin/bash

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar collectstatic
python manage.py collectstatic --noinput

python manage.py makemigrations

python manage.py migrate