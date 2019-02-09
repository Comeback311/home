import React, { Component } from 'react';

import Header from '../Header'
import Footer from '../Footer'

import Title from '../Title'
import Keywords from '../Keywords'

import './index.scss'
class Document extends Component {
    constructor(props) {
        super(props);
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
        return (
            <React.Fragment>
                <Header />
                <div className='document'>
                    <Title text={this.props.title} />
                    {this.props.content}
                    <Keywords keywords={this.props.keywords} />
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Document;
