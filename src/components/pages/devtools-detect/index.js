import React, { Component } from 'react';

import './index.scss';

import * as devtools from '../../../../node_modules/devtools-detect/index.js'

import { Document } from '../../components/all'

class devtoolsDetect extends Component {
    constructor(props) {
        super(props);

        

        this.state = { devtools: null };
        this.onDevtoolsChange = this.onDevtoolsChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('devtoolschange', this.onDevtoolsChange);

        this.setState({
            devtools: {
                isOpen: devtools.open,
                orientation: devtools.orientation
            }
        });
    }

    onDevtoolsChange(e) {
        this.setState({
            devtools: {
                isOpen: e.detail.open,
                orientation: e.detail.orientation
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('devtoolschange', this.onDevtoolsChange);
    }

    render() {
        const devtools = this.state.devtools || {};

        const content =
            <React.Fragment>
                <p className='paragraph'>В строке ниже вы узнаете открыт ли сейчас devtools.</p>
                <div className={'devtools__message alert alert-' + (devtools.isOpen ? 'success' : 'secondary')} role="alert">
                    Is DevTools open? <span className='alert-link'>{devtools.isOpen ? 'yes' : 'no'}</span>
                </div>
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default devtoolsDetect;
