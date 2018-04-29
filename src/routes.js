import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../src/components/home/home"
import Login from "../src/components/auth/login"
import Register from "../src/components/auth/register"
import PageWrapper from './components/wrappers/pageWrapper';


const Routes = () => (
    <Router>
        <Switch>
            <PageWrapper>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    exact
                    path="/login"
                    component={Login}
                />
                <Route
                    exact
                    path="/register"
                    component={Register}
                />
            </PageWrapper>
        </Switch>
    </Router>
)

export default Routes