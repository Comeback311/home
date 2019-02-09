import React, { Component } from 'react';

// import * as Components from '../../components/all'

import './index.scss';

// const {
//     Document,
// } = Components.default
import Document from '../../components/Document'

class cssGradient extends Component {
    constructor(props) {
        super(props);

        document.title = props.name;
        console.log(this)
    }

    render() {
        const content =
            <React.Fragment>
                css-gradient
            </React.Fragment>;

        return (
            <Document content={content} title={this.props.name} keywords={this.props.keywords} />
        );
    }
}

export default cssGradient;
