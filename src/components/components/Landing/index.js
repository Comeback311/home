import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Document } from '../all'
import Pages from '../../pages/pages'

import { beautifyAnchorText } from '../../tools/helpers'

import './index.scss'

class Landing extends Component {
    render() {
        const content = Pages.map((link, index) => {
            return (!link.hidden &&
                <div className='landing-item'>
                    {link.icon && <img className='landing-item__icon' src={link.icon} />}
                    <Link className='langind-item__link link' to={`/pages/${link.path}`} key={index}>{link.name}</Link>
                </div>
            )
        })

        return (
            <Document content={content} context={{name: 'Главная страница', type: 'landing'}}/>
        )
    }
}

export default Landing
