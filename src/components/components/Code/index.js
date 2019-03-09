import React, { Component } from 'react';

import './index.scss';

// languages for hightlighten here https://highlightjs.org/download/
// examples https://highlightjs.org/static/demo/

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

class Code extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCopied: false
        }
    }

    selectText(elem) {
        var range,
            selection;

        if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(elem);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(elem);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    copyToBuffer(domElem) {
        this.selectText(domElem);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }

    onCopyClick(e) {
        this.copyToBuffer(e.target.parentNode.firstChild);

        this.setState({
            showCopied: true
        });

        clearTimeout(this._copyElemTimer);
    }

    render() {
        return (
            <div className='code'>
                <div className='code__content' dangerouslySetInnerHTML={{
                    __html: hljs.highlight(this.props.lang, this.props.content).value
                }}></div>
                {
                    <div 
                        className={'code__copied ' + (this.state.showCopied ? ' code__copied_active' : '')} 
                        onClick={this.onCopyClick.bind(this)}
                    >{
                        this.state.showCopied ? 'Скопировано' : 'Скопировать'
                    }
                    </div>
                }
            </div>
        );
    }
}

export default Code;
