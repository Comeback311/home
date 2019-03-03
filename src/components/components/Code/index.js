import React, { Component } from 'react';

import './index.scss';

// languages for hightlighten here https://highlightjs.org/download/
// examples https://highlightjs.org/static/demo/

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

class Code extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='code' 
                dangerouslySetInnerHTML={{
                    __html: hljs.highlight(this.props.lang, this.props.content).value
                }}>
            </div>
        );
    }
}

export default Code;
