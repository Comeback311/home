import React from 'react'

import './index.scss'
import Logo from './404.png'

const NoFound404 = () => (  
    <React.Fragment>
        <div className="no-found">
            <img className='no-found__logo' src={Logo} />
            <a className='no-found__link' href="/">Перейти к главной странице</a>
        </div>
    </React.Fragment>
)

export default NoFound404;
