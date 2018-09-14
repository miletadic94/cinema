import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import {history} from './createStore'
import Home from "../src/components/home/home"
import Login from "../src/components/auth/login"
// import Register from "../src/components/auth/register"

import MovieList from "../src/components/movies/movieList"
import SingleMovie from "../src/components/movies/singleMovie"
import AllMovies from "../src/components/movies/admin/allMovies"
import NewMovie from "../src/components/movies/admin/newMovie"

import Projections from '../src/components/projections/projections'
import SingleProjection from '../src/components/projections/singleProjection'
import Header from './components/common/header/header';


const Routes = () => (
    <Router history={history}>
        <div className="container">
            <Header history={history}/>
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
                /> */}
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                <Route
                    exact
                    path="/movies"
                    component={MovieList}
                />
                <Route
                    exact
                    path="/movie/:id"
                    component={SingleMovie}
                />
                <Route
                    exact
                    path="/admin/movies"
                    component={AllMovies}
                />
                <Route
                    exact
                    path="/admin/movie/new"
                    component={NewMovie}
                />
                <Route
                    exact
                    path="/projections"
                    component={Projections}
                />
                <Route
                    exact
                    path="/projections/:id"
                    component={SingleProjection}
                />
            </Switch>
        </div>
    </Router>
)

export default Routes