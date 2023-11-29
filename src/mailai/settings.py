"""
Django's settings for mailai project.

Generated by 'django-admin startproject' using Django 4.2.7.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""
import os
from pathlib import Path

from keybert import KeyBERT
from transformers import pipeline, AutoTokenizer, Pipeline

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/
# SECURITY WARNING: keep the secret key used in production secret!
DJANGO_CRYPTOGRAPHY_KEY: str = str(os.environ.get("WEB_CRYPTOGRAPHY_KEY")).strip()
SECRET_KEY: str = str(os.environ.get("WEB_SECRET_KEY", 'default_secret_key')).strip()
PUBLIC_HOST: str = str(os.environ.get("LETSENCRYPT_HOST", 'localhost')).strip()
OPENAI_API_KEY: str = str(os.environ.get("WEB_OPENAI_API_KEY", 'default_openai_key')).strip()
OPENAI_MODEL: str = str(os.environ.get("WEB_OPENAI_MODEL", 'default_model')).strip()
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG: bool = bool(int(str(os.environ.get("WEB_DEBUG", 'False')).strip()))

KW_MODEL_INSTANCE: KeyBERT = KeyBERT()
BERT_SUMMARIZER: Pipeline = pipeline("summarization")
BERT_TOKENIZER: AutoTokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')

# print(f"SECRET_KEY set: {'Yes' if SECRET_KEY != 'default_secret_key' else 'No'}")
# print(f"SECRET_KEY: {SECRET_KEY}")
# print(f"DJANGO_CRYPTOGRAPY_KEY: {DJANGO_CRYPTOGRAPHY_KEY}")
# print(f"PUBLIC_HOST: {PUBLIC_HOST}")
# print(f"OPENAI_API_KEY set: {'Yes' if OPENAI_API_KEY != 'default_openai_key' else 'No'}")
# print(f"OPENAI_MODEL: {OPENAI_MODEL}")
# print(f"DEBUG: {DEBUG}")

ALLOWED_HOSTS = ['localhost', '127.0.0.1', PUBLIC_HOST]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'widget_tweaks',
    'authapp',
    'django_cryptography',
    'wmailapp',
    'comm',
    'rmailapp',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CSRF_COOKIE_SECURE = True

CORS_ORIGIN_ALLOW_ALL = True

CORS_ALLOW_CREDENTIALS = True

CSRF_TRUSTED_ORIGINS = (
    f'https://{PUBLIC_HOST}',
    f'http://{PUBLIC_HOST}',
)

CORS_ORIGIN_WHITELIST = (
    f'https://{PUBLIC_HOST}',
    f'http://{PUBLIC_HOST}',
)

CORS_ALLOW_HEADERS = (
    'access-control-allow-credentials',
    'access-control-allow-origin',
    'access-control-request-method',
    'access-control-request-headers',
    'accept',
    'accept-encoding',
    'accept-language',
    'authorization',
    'connection',
    'content-type',
    'dnt',
    'credentials',
    'host',
    'origin',
    'user-agent',
    'X-CSRFToken',
    'csrftoken',
    'x-requested-with',
)

ROOT_URLCONF = 'mailai.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mailai.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

if os.environ.get('WEB_IS_PROD') == '1':
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': os.environ.get('DB_DATABASE'),
            'USER': os.environ.get('DB_USER'),
            'PASSWORD': os.environ.get('DB_PASSWORD'),
            'HOST': os.environ.get('DB_HOST'),
            'PORT': os.environ.get('DB_PORT'),
            'OPTIONS': {
                'init_command': "SET sql_mode='STRICT_TRANS_TABLES', innodb_strict_mode=1",
                'charset': 'utf8mb4',
            },
        }
    }
else:
    # Fall back to SQLite if not in production
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
