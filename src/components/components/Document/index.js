import React, { Component } from 'react';

import {
    Title,
    Keywords
} from '../all'

import './index.scss'

class Document extends Component {
    constructor(props) {
        super(props);

        if (props.context && props.context.name) {
            document.title = props.context.name;
        }
    }

    componentDidMount() {
        // Decode entities in the URL
        // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 2) {
                const hash = hashParts.slice(-1)[0];
                document.querySelector(`[name="${hash}"]`).scrollIntoView();
            }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
    }

    render() {
        const { type, keywords, name: title } = this.props.context || {};

        console.log()

        return (
            <React.Fragment>
                <div className='document'>
                    {!type && <Title text={title} />}
                    {this.props.content}
                    <Keywords keywords={keywords} />
                </div>
            </React.Fragment>
        )
    }
}

export default Document;
