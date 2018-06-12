import React from 'react'
import { connect } from 'react-redux'
import Header from '../common/header'
import movies from './moviesList'

class Movies extends React.Component {


    render() {
        return (
            <div className="container">
                <Header route={this.props.history.location.pathname} />
                {movies.map(movie =>
                    <div key={movie.id} className='replist'>
                        <div className='content-wrapper'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <img className='img-fluid' src={movie.picture} />
                                </div>
                                <div className="col-md-9">
                                    <h4><b>{movie.name}</b></h4>
                                    <h5>{movie["distribution year"]}</h5>
                                    <h5><b>{movie.genre}</b></h5>
                                    <h5>{movie.actor}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Movies