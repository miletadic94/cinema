import React from 'react'
import movies from '../movies/moviesList'
import CalendarButtons from '../common/calendarButtons'
import ProjectionButton from './projectionButton'


class ProjectionList extends React.Component {

    goToMovie = (id) => {
        this.props.history.push(`movie/${id}`)
    }
    render() {


        return (
            <div className="container">
                <div className="row">
                    <CalendarButtons />
                </div>
                <div className="container mt-5">
                    {movies.map(movie =>
                        <div key={movie.id} className="row justify-content-md-center mb-5 box-shadow">
                            <div className="col col-lg-2 pl-0">
                                <img className='img-fluid' src={movie.picture} alt="Movie" />
                            </div>
                            <div className="col col-lg-10-auto">
                                <div className="pt-3">
                                    <h4><b>{movie.name}</b></h4>
                                    <h5>{movie["distribution year"]}</h5>
                                    <h5><b>{movie.genre}</b></h5>
                                    <h6>{movie.actor}</h6>
                                    <hr />
                                </div>
                                <button onClick={this.goToMovie.bind(this, movie.id)} className="btn btn-outline-dark btn-md float-right">
                                    more info
                              </button>
                                <ProjectionButton />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ProjectionList