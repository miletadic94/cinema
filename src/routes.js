import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import { history } from './createStore'
import Home from "../src/routes/home/home"
import Login from "../src/routes/auth/login"
import Register from "../src/routes/auth/register"

import MovieList from "../src/routes/movies/movieList"
import SingleMovie from "../src/routes/movies/singleMovie"
import AllMovies from "../src/routes/movies/admin/allMovies"
import NewMovie from "../src/routes/movies/admin/newMovie"

import ProjectionList from '../src/routes/projections/projectionList'
import SingleProjection from '../src/routes/projections/singleProjection'
import Wrapper from './components/wrapper';
import EditMovie from './routes/movies/admin/editMovie';
import Modal from './modal';


const Routes = () => (
    <Router history={history}>
            <Wrapper history={history} >
            <Switch>
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
                    path="/admin/movies/new"
                    component={NewMovie}
                />
                <Route
                    exact
                    path="/admin/movies/:id"
                    component={EditMovie}
                />
                <Route
                    exact
                    path="/projections"
                    component={ProjectionList}
                />
                <Route
                    exact
                    path="/projections/:id"
                    component={SingleProjection}
                />
            </Switch>
            <Modal />
            </Wrapper>
    </Router>
)

export default Routes;