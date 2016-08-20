from django.shortcuts import render

from react.render import render_component

import os
import settings


def detail_view(request, pk):
    return render_react(request, {'post_title': 'Object %s' % pk})


def list_view(request):
    return render_react(request)


def render_react(request, props={}):
    props['path'] = request.path
    react_html = render_component(
        os.path.join(settings.BASE_DIR, 'mysite', 'src', 'App.js'), props)

    return render(request, 'index.html', {
        'title': "Django-isomorphic-react",
        'react_html': react_html,
    })
