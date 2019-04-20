import React, { Component } from 'react';

import { Document } from '../../components/all'

import './index.scss';

export default class utils extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content =
            <React.Fragment>
                test
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}
