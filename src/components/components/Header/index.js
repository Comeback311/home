import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

import Pages from '../../pages/all'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { suggestItems: [] };
    }

    onChangeSearch(e) {
        const request = e.target.value;

        if (!request) return;

        const foundPages = Pages.filter(page => page.name.toLocaleLowerCase().includes(request.toLocaleLowerCase()));

        this.setState({
            suggestItems: foundPages
        });
    }

    /**
     * Модифицирует входной текст в строку вида 
     * "Test test tEsT" -> "test-test-test"
     */
    beautifyAnchorText(text) {
        return text.toLowerCase().split(' ').join('-');
    }

    render() {
        const suggestItems = this.state.suggestItems;

        return (
            <div className='header'>
                <Link className='header__logo' to='/'>I don't know</Link>
                <div className='suggest'>
                    <input type='text' className='header__search form-control' placeholder='search' onChange={this.onChangeSearch.bind(this)} />
                    {suggestItems.length > 0 &&
                        <div className='suggest__content'>
                            <ul className='list-group'>
                                {suggestItems.map((item, index) => {
                                    return <Link className='suggest__link' to={`/pages/${this.beautifyAnchorText(item.name)}`}><li className='suggest__item list-group-item list-group-item-action'>{item.name}</li></Link>
                                })}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Header
