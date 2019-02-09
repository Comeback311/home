import React, { Component } from 'react';

import './index.scss';

class Title extends Component {
    constructor(props) {
        super(props);

        this.firstUpper = this.firstUpper.bind(this);
    }

    firstUpper(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return(!this.props.text ? '' :
            <div className={'title' + (this.props.text.length > 15 ? ' title_size_m' : '')}><h1 className='title__header'>{this.firstUpper(this.props.text)}</h1></div>
        );
    }
}

export default Title;
