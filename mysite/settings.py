import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = True

SECRET_KEY = '_'

INSTALLED_APPS = [
    'django.contrib.staticfiles',
]

ROOT_URLCONF = 'mysite.urls'

WSGI_APPLICATION = 'mysite.wsgi.application'

STATIC_URL = '/static/'
