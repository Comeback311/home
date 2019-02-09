import React, { Component } from 'react';

import * as Components from '../../components/all'

import './index.scss';

const {
    Document,
} = Components.default

class cssTasks extends Component {
    constructor(props) {
        super(props);

        document.title = props.name;
    }

    render() {
        const content =
            <React.Fragment>
                in development
            </React.Fragment>;

        return (
            <Document content={content} title={this.props.name} keywords={this.props.keywords} />
        );
    }
}

export default cssTasks;
