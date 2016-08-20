import React from 'react';
import { Link } from 'react-router';

export default class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/example">Example page</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
