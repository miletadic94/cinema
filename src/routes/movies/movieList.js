import React from 'react'
import movies from './moviesList'

class MovieList extends React.Component {

    goToMovie = (id) => {
        this.props.history.push(`movie/${id}`)
    }

    render() {
        return (
            <div className="container">
                {movies.map(movie =>
                    <div key={movie.id} className="row justify-content-md-center mb-5 box-shadow">
                        <div className="col col-lg-2 pull-left pl-0">
                            <img className='img-fluid' src={movie.picture} alt="Movie" />
                        </div>
                        <div className="col col-lg-10-auto">
                            <div className="mt-3">
                                <h4><b>{movie.name}</b></h4>
                                <h5>{movie["distribution year"]}</h5>
                                <h5><b>{movie.genre}</b></h5>
                                <h5>{movie.actor}</h5>
                                <hr />
                            </div>
                            <button onClick={this.goToMovie.bind(this, movie.id)} className="btn btn-outline-dark btn-lg float-right">
                                more info
                              </button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default MovieList