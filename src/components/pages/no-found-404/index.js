import React from 'react'

import { Link } from 'react-router-dom'

import './index.scss'
import Logo from './404.png'

const NoFound404 = () => (  
    <React.Fragment>
        <div className='no-found'>
            <img className='no-found__logo' src={Logo} />
            <Link className='no-found__link' to='/'>Перейти к главной странице</Link>
        </div>
    </React.Fragment>
)

export default NoFound404;
