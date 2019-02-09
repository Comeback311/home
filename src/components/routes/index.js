import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'

import '../tools/reset.scss'
import '../tools/common.scss'

import Home from '../pages/home'
import NoFoundPage from '../pages/no-found-404'

import Tags from '../tools/tags'

import Pages from '../pages/pages'

import { beautifyAnchorText } from '../tools/helpers'

const WrappedComponent = function(props) {
    const Component = props.component;
    // Конструкция "{...props}" нужна, чтобы не потерять
    // параметры, переданные от компонента Route
    return (<Component {...props} />);
}

const RoutesFromPages = Pages.map((page, index) => {
    return (
        <Route path={`/pages/${beautifyAnchorText(page.name)}`} component={WrappedComponent.bind(this, page)} key={index}/>
    )
})

const Routes = () => (  
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            { RoutesFromPages }
            <Route path='/tags/:tag/' component={Tags}/>
            <Route exact path='/' component={Home}/>
            <Route path='/*' component={NoFoundPage}/>
        </Switch>
    </HashRouter>  
)

export default Routes;
