import React from 'react';
import { Link } from 'react-router';

export default class List extends React.Component {
    render() {
        /*
         * TODO: 'Objects' should be result of data injected
         * by Django (through serialized props) or AJAX calls thereafter.
         * Similar scenario in src/components/List.js
         */
        return (
            <div>
                <h1>Django-isomorphic-react</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/1/">Object one</Link></li>
                        <li><Link to="/2/">Object two</Link></li>
                        <li><Link to="/3/">Object three</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
