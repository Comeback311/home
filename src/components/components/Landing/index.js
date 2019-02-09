import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Document from '../Document'
import Pages from '../../pages/all'

import './index.scss'

class Landing extends Component {
    /**
 * Модифицирует входной текст в строку вида 
 * "Test test tEsT" -> "test-test-test"
 */
    beautifyAnchorText(text) {
        return text.toLowerCase().split(' ').join('-');
    }
    render() {
        const content = Pages.map((link, index) => {
            return (!link.hidden &&
                <Link className='link' to={`/pages/${this.beautifyAnchorText(link.name)}`} key={index}>{link.name}</Link>
            )
        })

        return (
            <Document content={content} />
        )
    }
}

export default Landing
