import React, { Component } from 'react';

import './index.scss';

let inputOrder = 0;

class Checkbox extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        inputOrder++;
        this._randomId = `checkbox__item_${inputOrder}`;
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    render() {
        const text = this.props.text;
        const checked = this.props.checked;

        return (!text ? '' :
            <div className='checkbox'>
                <input 
                    type='checkbox' 
                    className='checkbox__input' 
                    id={this._randomId}
                    onChange={this.props.onInput}
                    checked={checked}
                ></input>
                <label htmlFor={this._randomId}>{text}</label>
            </div>
        );
    }
}

export default Checkbox;
