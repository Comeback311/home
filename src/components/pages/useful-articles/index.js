import React, { Component } from 'react';

import { Document, Accordion, Code } from '../../components/all'

import bubblesCode from './code/bubbles-code'
import stepsCode from './code/steps-code'

import portraitCss from './images/portrait-css.png'

import './index.scss';

class usefulArticless extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName('useful-articles__bubbles')[0].innerHTML = bubblesCode;
    }

    render() {
        const content =
            <React.Fragment>
                <p className='paragraph'>
                    Soap bubbles on CSS + svg.<br />
                    <a href='//css.yoksel.ru/svg-bubble/' target='_blank'>css.yoksel.ru/svg-bubble</a>
                </p>
                <br />
                <div className='useful-articles__bubbles'></div>
                <br />
                <br />
                <Accordion
                    clickedYes='Показать код'
                    showedContent={<Code lang='html' content={bubblesCode} />}
                />
                <div className='article__divider'></div>
                <p className='paragraph'>
                    The Clock on CSS.
                    <br />
                    <a href='//css.yoksel.ru/css-animation/' target='_blank'>css.yoksel.ru/css-animation</a>
                </p>
                <br />
                <div className='useful-articles__steps'></div>
                <br />
                <Accordion
                    clickedYes='Показать код'
                    showedContent={<Code lang='css' content={stepsCode} />}
                />
                <div className='article__divider'></div>
                <p className='paragraph'>
                    The Portrait on CSS only.
                    <br />
                    <a href='//cyanharlow.github.io/purecss-francine/' target='_blank'>cyanharlow.github.io/purecss-francine</a>
                </p>
                <br />
                <img className='useful-articles__portrait' src={portraitCss} />
                <div className='article__divider'></div>
                <p className='paragraph'>
                    Css gradient.
                    <br />
                    <a href='//html5book.ru/css3-gradient/'>https://html5book.ru/css3-gradient/</a>
                </p>
                <br />
                <div className='useful-articles__gradient'></div>
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default usefulArticless;
