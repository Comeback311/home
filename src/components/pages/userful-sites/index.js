import React, { Component } from 'react';

import { Document } from '../../components/all'

import regexcrossword from './images/regexcrossword.png'

import './index.scss';

class usefulSites extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const content =
            <React.Fragment>
                <p className='paragraph'>
                    <a href='https://regexcrossword.com' target='_blank'>Regexcrossword.com</a> - Welcome to the fantastic world of nerdy regex fun! Start playing by selecting one of the puzzle challenges below. There are a wide range of difficulties from beginner to expert.
                    <img className='userful-sites__regexcrossword' src={regexcrossword} />
                </p>
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default usefulSites;
