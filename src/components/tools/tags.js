import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Pages from '../pages/all';
import Keywords from '../components/Keywords';
import Document from '../components/Document'

class Tags extends Component {
    constructor(props) {
        super(props);

        this._tag = props.match.params.tag;
    }

    /**
   * Модифицирует входной текст в строку вида 
   * "Test test tEsT" -> "test-test-test"
   */
    beautifyAnchorText(text) {
        return text.toLowerCase().split(' ').join('-');
    }

    getContent() {
        const pages = Pages.filter(function (page) {
            return (page.keywords || []).includes(this._tag);
        }.bind(this));

        const tagItem = <Keywords onlyKey={true} keywords={[this._tag]} />;

        if (!pages.length)
            return <div className='paragraph'>Записей с тегом {tagItem} не найдено</div>;

        const foundItem = <div className='paragraph'>Найдено с тегом {tagItem}</div>;
        const pageItems = pages.map((page, index) => {
            return !page.hidden && <Link className='link' key={index} to={`/pages/${this.beautifyAnchorText(page.name)}`}>{page.name}</Link>
        });

        return <React.Fragment>
            {foundItem}
            {pageItems}
        </React.Fragment>
    }

    render() {
        const content = this.getContent.call(this);

        return (
            <Document content={content} title={this.props.name} keywords={this.props.keywords} />
        );
    }
}

export default Tags;
