import React from 'react'
import movies from '../movies/moviesList'
import CalendarButtons from '../common/calendarButtons'
import ProjectionButton from './projectionButton'


class Projections extends React.Component {
    render() {
        const { pathname } = this.props.history.location
        return (
            <div className="container">
                <div className="row">
                    <CalendarButtons />
                </div>
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
                                    <hr />
                                    <a href={`movie/${movie.id}`} className="btn btn-border float-right">  more info</a>
                                 <ProjectionButton />
                                </div>
                            </div>
                            <hr className="horizontal-line" />
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Projections