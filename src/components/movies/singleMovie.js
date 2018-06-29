import React from 'react'
import Header from '../common/header'
import moviesList from './moviesList'
import YouTube from 'react-youtube'
import ProjectionButton from '../projections/projectionButton'
import ProjectionSlider from './projectionSlider'

class Movies extends React.Component {

    movie = { ...moviesList[this.props.match.params.id] }

    render() {
        const { pathname } = this.props.history.location
        return (
            <div className="container">
                <Header route={pathname} />
                <div className="row">
                    <div className="col-4">
                        <img className="img-fluid" src={this.movie.picture} />
                    </div>
                    <div className="col-8">
                        <div className="pl-20">
                            <a src="">
                                <img className="btn btn-imdb float-right" src="/img/IMDb_icon.png" />
                            </a>
                            <a src="">
                                <img className="btn btn-imdb float-right" src="/img/rotten_tomatoes_icon.png" />
                            </a>
                            <h1>{this.movie.name}</h1>
                            <h2>{this.movie.genre}</h2>
                            <h2>{this.movie["distribution year"]}</h2>
                            <h3>{this.movie.actor}</h3>
                            <hr />
                            <label>{this.movie.synopsis}</label>
                        </div>
                    </div>

                </div>
                <hr className="horizontal-line" />
                <ProjectionSlider />
                <hr className="horizontal-line" />
                <div className="container-youtube">
                    <YouTube videoId="uf7g9cJgCpc" />
                </div>
            </div>
        )
    }
}

export default Movies