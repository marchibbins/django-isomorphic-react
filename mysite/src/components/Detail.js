import React from 'react';

export default class Detail extends React.Component {
    render() {
        /*
         * TODO: Title should come from Django or AJAX,
         * see comment in src/components/List.js
         */
        let title = this.props.post_title ?
            this.props.post_title : 'Object ' + this.props.params.id;
        return (
            <article>
                <h2>{ title }</h2>
            </article>
        );
    }
}
