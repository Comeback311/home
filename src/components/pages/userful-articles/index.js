import React, { Component } from 'react';

import { Document, Accordion, Code } from '../../components/all'

import bubbles from './code/bubbles'
import bubblesCode from './code/bubbles-code'

import './index.scss';

class usefulArticless extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content =
            <React.Fragment>
                <p className='paragraph'>
                    Soap bubbles on CSS + svg.<br /><a href='http://css.yoksel.ru/svg-bubble/' target='_blank'>css.yoksel.ru/svg-bubble</a>
                    <br />
                </p>
                <br />
                {bubbles()}
                <br />
                <br />
                <Accordion
                    clickedYes='Показать код'
                    showedContent={<Code lang='html' content={bubblesCode} />}
                />
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default usefulArticless;
