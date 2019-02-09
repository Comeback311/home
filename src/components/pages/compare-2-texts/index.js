/* global diff_match_patch */
import React, { Component } from 'react';

import './index.scss';

import { Document } from '../../components/all'
import { inlineScript, removeScript } from '../../tools/helpers'

class Compare2Texts extends Component {
    constructor(props) {
        super(props);

        

        this.state = { diff: null }
        this._lib = 'https://cdnjs.cloudflare.com/ajax/libs/diff_match_patch/20121119/diff_match_patch.js'
    }

    componentDidMount () {
        inlineScript(this._lib)
    }

    componentWillUnmount() {
        removeScript(this._lib)
    }

    onClick() {
        const one = document.querySelector('.textarea_type_one').value;
        const two = document.querySelector('.textarea_type_two').value;
        const dmp = new diff_match_patch();
        const diff = dmp.diff_main(one, two);

        this.setState({
            diff
        });
    }

    getClassByValue(val) {
        switch (val) {
            case 1 : return 'first';
            case -1 : return 'second';
            default: return null;
        }
    }

    render() {
        const textOne = 
`var arr = [1, -1, 2, -2, 3];

var positiveArr = arr.filter(function(number) {
    return number > 0;
});

alert( positiveArr ); // 1, 2, 3`;

    const textTwo =
`var arr = [1, 5, -1, 2, -2, 4, 3];

var positiveArr = arr.filter(function(val) { 
    return val => 0;
});

alert( positiveArr ); // 1, 5, 2, 4, 3`;
        const content =
            <React.Fragment>
                    <p className='paragraph'>Функция попарно сравнивает два текста и показывает разницу.</p>
                    <div className={'compare-text-block' + (this.state.diff ? ' compare-text-block__active' : '')}>
                        <textarea rows='14' className='textarea textarea_type_one' defaultValue={textOne}></textarea>
                        <textarea rows='14' className='textarea textarea_type_two' defaultValue={textTwo}></textarea>
                    </div>
                    <button className='compare-text-block__button btn btn-outline-primary' onClick={this.onClick.bind(this)}>Click</button>
                    <div className='compare-text-block__result'>
                        {this.state.diff && [<p className='paragraph'><b>Результат:</b></p>, this.state.diff.map((item, index) => {
                        const hasChange = this.getClassByValue.call(this, item[0]);
                        return (hasChange ?
                            <span className={hasChange} key={index}>{item[1]}</span> :
                            item[1]
                        )
                    })]}</div>
                
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default Compare2Texts;
