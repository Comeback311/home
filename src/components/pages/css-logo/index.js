import React, { Component } from 'react';

import { Document, Checkbox } from '../../components/all'

import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import './index.scss';

class CssLogo extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            active: false,
            value: 8
		};
    }

    onChange(e) {
		this.setState({
			active: e.target.checked,
			value: this.state.value
		});
    }

    onRangeChange(value) {
        this.setState({ 
            active: this.state.active,    
            value
		});

		if (!this.state.active) return;

        if (!this._logoAnimateElem) {
            this._logoAnimateElem = document.getElementsByClassName('css-logo__animate')[0]
        }

        if (!this._defaultProperty) {
            this._defaultProperty = window.getComputedStyle(this._logoAnimateElem).boxShadow;
		}

        this._logoAnimateElem.style.boxShadow = this._defaultProperty
            .split('px,')
            .splice(8 - value)
            .join('px,');
    }

    render() {
        const content = 
            <React.Fragment>
                <div className='center'>
                    <div className='css-logo'>
                        <a 
							className={`css-logo__link` + (this.state.active ? ' css-logo__link_active' : '')}
                        >test
                        <div className='css-logo__animate'>
                        </div>
                        </a>
                    </div>
                    <Checkbox 
                        text='Запустить' 
                        checked={this.state.active} 
                        onInput={this.onChange.bind(this)}
                    />
                    <br />
                    <br />
                    <div className='range'>
                        <p className='paragraph'>Число линий:</p>
                        <br />
                        <InputRange
                            maxValue={8}
                            minValue={1}
                            value={this.state.value}
                            onChange={this.onRangeChange.bind(this)}
                        />
                    </div>
                </div>
            </React.Fragment>;

        return(
            <Document content={content} context={this.props} />
        );
    }
}

export default CssLogo;
