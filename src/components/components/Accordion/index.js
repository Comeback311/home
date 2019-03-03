import React, { Component } from 'react';

import './index.scss';

import { firstUpper } from '../../tools/helpers'

class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = { isShowed: this.props.opened || false };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            isShowed: !this.state.isShowed
        });
    }

    render() {
        let { showedContent } = this.props;

        const clickedYes = firstUpper(this.props.clickedYes || 'развернуть');
        const clickedNo = firstUpper(this.props.clickedNo || 'свернуть');

        return (!showedContent ? '' :
            <div className='accordion'>
                <div className='accordion__clicked' onClick={this.onClick}>
                    {this.state.isShowed ? clickedNo : clickedYes}
                </div>
                {this.state.isShowed && <div className='accordion__showed'>{showedContent}</div>}
            </div>
        );
    }
}

export default Accordion;
