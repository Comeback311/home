import React, { Component } from 'react';

import { Document } from '../../components/all'

import regexcrossword from './images/regexcrossword.png'
import regexpsite from './images/regexpsite.png'

import './index.scss';

class usefulSites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content =
            <React.Fragment>
                <p className='paragraph'>
                    <a href='//regexcrossword.com' target='_blank'>Regexcrossword.com</a> - Welcome to the fantastic world of nerdy regex fun! Start playing by selecting one of the puzzle challenges below. There are a wide range of difficulties from beginner to expert.
                    <br />
                    <img className='userful-sites__regexcrossword' src={regexcrossword} />
                </p>
                <p className='paragraph'>
                    <a href='http://collabedit.com' target='_blank'>Сollabedit.com</a> - Code writing online
                </p>
                <p className='paragraph'>
                    <a href='//findmevk.com' target='_blank'>Findmevk.com</a> - To find a user in vk.com by a photo.
                </p>
                <p className='paragraph'>
                    <a href='//measurethat.net' target='_blank'>Measurethat.net</a> - To compare a several combinations of code.
                </p>

                <p className='paragraph'>
                    <a href='//codewars.com' target='_blank'>Codewars.com</a> &amp; <a href='//leetcode.com' target='_blank'>Leetcode.com</a> - Code writing practice.
                </p>
                <p className='paragraph'>
                    <a href='//regexplained.com' target='_blank'>Regexplained.com</a> - Regular expressions test.
                    <br />
                    <img className='userful-sites__image' width='600px' src={regexpsite} />
                </p>
                <p className='paragraph'>
                    <a href='//javascriptweekly.com' target='_blank'>Javascriptweekly.com</a> - Weekly Javascript news &amp; updates.
                </p>
                <p className='paragraph'>
                    <a href='//soundcloud.com/web-standards' target='_blank'>Soundcloud.com/web-standards</a> - The Javascript's news podcasts.
                </p>
                <p className='paragraph'>
                    <a href='//blog.perlover.com/2012/04/11/why-i18n-l10n' target='_blank'>Почему они называются I18N и L10n?</a>
                </p>

            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default usefulSites;
