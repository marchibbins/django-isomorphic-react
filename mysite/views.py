from django.shortcuts import render

from react.render import render_component

import os
import settings


def index(request):
    react_html = render_component(
        os.path.join(settings.BASE_DIR, 'mysite', 'static', 'App.js'),
        props={'path': request.path}
    )

    return render(request, 'index.html', {
        'title': 'Hello world',
        'react_html': react_html,
    })
