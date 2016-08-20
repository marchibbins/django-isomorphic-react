import React from 'react';
import { match, RouterContext } from 'react-router';

import routes from './routes';

class App extends React.Component {
    componentWillMount() {
        match({routes, location: this.props.path}, (error, redirectLocation, renderProps) => {
            if (renderProps) {
                const transferProps = (Component, props) => {
                    return <Component {...props} {...this.props} />
                }
                this.routerContext = (
                    <RouterContext createElement={transferProps} {...renderProps} />
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
