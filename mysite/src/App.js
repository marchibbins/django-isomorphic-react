import React from 'react';
import { match, RouterContext } from 'react-router';

import routes from './routes';

class App extends React.Component {
    componentWillMount() {
        match({routes, location: this.props.path}, (error, redirectLocation, renderProps) => {
            if (renderProps) {
                this.routerContext = (
                    <RouterContext {...renderProps} />
                );
            } else {
                // TODO: 500, 302, 404 "expected" to be handled by Django
            }
        });
    }

    render() {
        return this.routerContext
    }
}

export default App;
