import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './index.scss';

class Subtitle extends Component {
    constructor(props) {
        super(props);

        this.state = { svgIconVisible: false };
    }

    onSubtitleClick(e) {
        // this.setState({ visible: true });

        // setTimeout((() => {
        //     this.setState({ visible: false });
        // }).bind(this), 1000);
    }

    setClassName() {
        const size = this.props.size || 'm';

        return 'subtitle subtitle_size_' + size;
    }

    onSubtitleMouseEnter() {
        this.setState({
            svgIconVisible: true
        });
    }

    onSubtitleMouseLeave() {
        this.setState({
            svgIconVisible: false
        });
    }

    /**
     * Модифицирует входной текст в строку вида 
     * "Test test tEsT" -> "test-test-test"
     */
    beautifyAnchorText(text) {
        return text.toLowerCase().split(' ').join('-');
    }

    render() {
        return(
            <div className={this.setClassName()}>
                <h2
                    // onClick={this.onSubtitleClick.bind(this)} 
                    onMouseEnter={this.onSubtitleMouseEnter.bind(this)}
                    onMouseLeave={this.onSubtitleMouseLeave.bind(this)}
                >
                    <Link to={`#${this.beautifyAnchorText(this.props.text)}`}
                        className='subtitle__anchor' 
                        name={this.beautifyAnchorText(this.props.text)}
                    >
                        {this.props.text}
                    </Link>
                </h2>
                {this.state.svgIconVisible && <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>}
            </div>
        );
    }
}

export default Subtitle
