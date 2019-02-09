import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Pages from '../pages/pages';
import { Document, Keywords } from '../components/all'

import { beautifyAnchorText } from './helpers'

import NoFoundPage from '../pages/no-found-404'

class Tags extends Component {
    constructor(props) {
        super(props);

        this._tag = props.match.params.tag;
    }

    getContent() {
        const pages = Pages.filter(function (page) {
            return (page.keywords || []).includes(this._tag);
        }.bind(this));

        const tagItem = <Keywords onlyKey={true} keywords={[this._tag]} />;

        if (!pages.length)
            return false;

        const foundItem = <div className='paragraph'>Найдено с тегом {tagItem}</div>;
        const pageItems = pages.map((page, index) => {
            return !page.hidden && <Link className='link' key={index} to={`/pages/${beautifyAnchorText(page.name)}`}>{page.name}</Link>
        });

        return <React.Fragment>
            {foundItem}
            {pageItems}
        </React.Fragment>
    }

    render() {
        const content = this.getContent.call(this);

        return (!content ?
            NoFoundPage() :
            <Document content={content} context={{name: 'Поиск по тегу: ' + this._tag, type: 'landing'}}/>
        );
    }
}

export default Tags;
