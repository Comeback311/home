import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import '../tools/reset.scss'
import '../tools/common.scss'

import Home from '../pages/home'
import NoFoundPage from '../pages/no-found-404'

import Tags from '../tools/tags'

import Pages from '../pages/pages'

import { beautifyAnchorText } from '../tools/helpers'

const WrappedComponent = function (props) {
    const Component = props.component;
    // Конструкция "{...props}" нужна, чтобы не потерять
    // параметры, переданные от компонента Route
    return (<Component {...props} />);
}

const RoutesFromPages = Pages.map((page, index) => {
    return (
        <Route path={`/pages/${page.path}`} component={WrappedComponent.bind(this, page)} key={index} />
    )
})

window.addEventListener('resize', resize);
resize();

function resize() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;

    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            {RoutesFromPages}
            <Route path='/tags/:tag/' component={Tags} />
            <Route exact path='/' component={Home} />
            <Route path='/*' component={NoFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
