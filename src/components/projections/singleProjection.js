import React from 'react'
import { connect } from 'react-redux'
import { mocked, numberOfSeats } from './mocked'
import movies from '../movies/moviesList';
import ProjectionButton from './projectionButton';

class SingleProjection extends React.Component {

    handleClick = () => {
        console.log("klinknuto")
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-fluid" src={movies[0].picture} />
                    </div>
                    <div className="col-md-6">
                        <h4>{movies[0].name} </h4>
                        <h4>{movies[0].genre} </h4>
                        <h4>{movies[0].actor} </h4>
                        <h5>{movies[0].synopsis}</h5>
                    </div>
                    <div className="col-md-3">
                        <ProjectionButton />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="hall clearfix">
                        <div className="row-number">
                            {mocked.map(item =>
                                item.seat === 1 ?
                                    <span>{item.row}</span> : null
                            )}
                        </div>
                        {mocked.map(item =>
                            <button
                                onClick={() => this.handleClick()}
                                disabled={item.taken}
                                className={item.taken ? "seat-taken" : "seat-avaliable"}
                            >
                                <span className="seat-number"> {item.seat} </span>
                            </button>
                        )
                        }
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-get-tickets ">Get Your Tickets!</button>
                </div>
            </div>
        )
    }
}

export default SingleProjection