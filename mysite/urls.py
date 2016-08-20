from django.conf.urls import url

from views import index

# TODO: URLs are present here as well as in JS routes,
# since Django is handling HTTP requests we don't want
# bother Node with invalid paths upfront, but the
# redundancy should be addressed.
# See mysite/routes.js

urlpatterns = [
    url(r'^example/$', index, name='index'),
    url(r'^$', index, name='index'),
]
