import React, { Component } from 'react';

import { Document } from '../../components/all'

import './index.scss';

class cssGradient extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content =
            <React.Fragment>
                css-gradient
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default cssGradient;
