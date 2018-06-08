import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Home from "../src/components/home/home"
// import Register from "../src/components/auth/register"
import Login from "../src/components/auth/login"


const Routes = () => (
    <Router>
        <Switch>
                <Route
                    exact
                    path="/login"
                    component={Login}
                />
                {/* <Route
                    exact
                    path="/register"
                    component={Register}
                />
                <Route
                    exact
                    path="/"
                    component={Home}
                /> */}
        </Switch>
    </Router>
)

export default Routes