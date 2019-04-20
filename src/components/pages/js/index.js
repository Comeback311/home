import React, { Component } from 'react';

import { Document, Code } from '../../components/all';

import CodeSection from './code/code1';
import CodeSection2 from './code/code2';

class js extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const content =
            <React.Fragment>
                <p className='paragraph'>Выделить визуально все элементы на странице.</p>
                <Code lang='javascript' content={CodeSection} />
                <br />
                <p className='paragraph'>Генератор #HEX цветов.</p>
                <Code lang='javascript' content={CodeSection2} />
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default js;
