from django.conf.urls import url

from views import detail_view, list_view

# TODO: URLs are present here as well as in JS routes,
# since Django is handling HTTP requests we don't want
# bother Node with invalid paths upfront, but the
# redundancy should be addressed.
# See mysite/routes.js

urlpatterns = [
    url(r'^(?P<pk>[0-9]+)/$', detail_view),
    url(r'^$', list_view),
]
