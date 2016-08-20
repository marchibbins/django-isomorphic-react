import React from 'react';

export default class Detail extends React.Component {
    render() {
        let title = this.props.post_title ?
            this.props.post_title : 'Object ' + this.props.params.id;
        return (
            <article>
                <h2>{ title }</h2>
            </article>
        );
    }
}
