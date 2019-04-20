import React, { Component } from 'react';

import { Document } from '../../components/all'

import './index.scss';

class css extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content =
            <React.Fragment>
                in development
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default css;
