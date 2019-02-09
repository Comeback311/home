import React, { Component } from 'react';

import { Document } from '../../components/all'

import parser from 'ua-parser-js'
import info from './info.svg'

import './index.scss';

class uaParser extends Component {
    constructor(props) {
        super(props);

        

        this.state = { placeholder: '', uaText: '' };
    }

    componentWillMount() {
        let dotCounter = 0;
        let defaultText = 'Загружаем UserAgent';

        this._timerText = setInterval(function () {
            dotCounter = dotCounter >= 3 ? 1 : dotCounter + 1

            this.setState({
                placeholder: defaultText + '.'.repeat(dotCounter)
            });
        }.bind(this), 200);

        this._timerFocus = setTimeout(function () {
            clearInterval(this._timerText);
            this.handleChange();
        }.bind(this), 2000);
    }

    componentWillUnmount() {
        clearTimeout(this._timerFocus);
        clearInterval(this._timerText);
    }

    handleChange() {
        this.setState({
            placeholder: '',
            uaText: window.navigator.userAgent || navigator.userAgent
        });

        this.uaInput.focus();
    }

    onSubmitForm(e) {
        e.preventDefault();

        const ua = parser(this.state.uaText);

        this.setState({
            ...this.state,
            uaData: ua
        });
    }

    beautifyUaData() {
        const uaData = this.state.uaData;

        const uaElements = Object.keys(uaData).map((key, index) => {
            const item = uaData[key];

            if (!index) return false;

            return (
                <React.Fragment key={index}>
                    <li key={index} className='list-group-item disabled list-group-item'>
                        <img className='ua-parser__icon_title' src={info}></img>{key}
                    </li>
                    {Object.keys(item).map((keyInner, indexInner) => {
                        return (
                            <li className='list-group-item' key={indexInner}>{keyInner} - {item[keyInner] || 'unknown'}</li>
                        )
                    })}
                </React.Fragment>
            )
        });

        const headerElement = <li className='list-group-item'><b>Информация:</b></li>

        return (
            <ul className='ua-parser__group list-group'>
                {headerElement}
                {uaElements}
            </ul>
        );
    }

    render() {
        const content =
            <React.Fragment>
                <p className='paragraph'><b>Ваш UserAgent:</b></p>
                <br />
                <form onSubmit={this.onSubmitForm.bind(this)}>
                    <div className='input-group mb-3'>
                        <input
                            ref={(input) => { this.uaInput = input; }}
                            type='text'
                            className='form-control ua-input'
                            placeholder={this.state.placeholder}
                            value={this.state.uaText}
                            onChange={this.handleChange.bind(this)} />
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='submit' id='button-addon2'>Start</button>
                        </div>
                    </div>
                </form>
                {
                    this.state.uaData && this.beautifyUaData.call(this)
                }
            </React.Fragment>;

        return (
            <Document content={content} context={this.props} />
        );
    }
}

export default uaParser;
