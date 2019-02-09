import React, { Component } from 'react';

import { Subtitle } from '../all';

import { Link } from 'react-router-dom'

import './index.scss';

class Keywords extends Component {
    constructor(...props) {
        super(...props)
    }

    render() {
        const { keywords, onlyKey } = this.props;

        return (!keywords ? '' :
            <React.Fragment>
                {!onlyKey && <Subtitle text='Keywords' size='s' />}
                <div className={'keywords' + (onlyKey ? ' keywords_inline' : '')}>
                    {keywords.map((key, index) => {
                        return <Link to={`/tags/${key}`} className='keywords__item' key={index}>{key}</Link>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default Keywords;
