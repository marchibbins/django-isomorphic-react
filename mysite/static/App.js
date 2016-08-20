import React from 'react';
import { match, RouterContext } from 'react-router';

import routes from './routes';

class App extends React.Component {
    componentWillMount() {
        match({routes, location: this.props.path}, (error, redirectLocation, renderProps) => {
            if (error) {
                // TODO: 500
            } else if (redirectLocation) {
                // TODO: 302
            } else if (!renderProps) {
                // TODO: 404
            } else {
                this.routerContext = (
                    <RouterContext {...renderProps} />
                );
            }
        });
    }

    render() {
        return this.routerContext
    }
}

export default App;
