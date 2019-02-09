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
                <Link className='link' to={`/pages/${beautifyAnchorText(link.name)}`} key={index}>{link.name}</Link>
            )
        })

        return (
            <Document content={content} context={{name: 'Главная страница', type: 'landing'}}/>
        )
    }
}

export default Landing
