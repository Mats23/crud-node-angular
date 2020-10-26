import React from 'react'
import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom'
import Login from '../views/Login'

const MainRoute = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Login} />
        </Switch>
    </Router>
)

export default MainRoute;
