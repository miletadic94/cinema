import React from 'react'
import MovieForm from './movieForm'
import { base64Converter } from '../../../helpers/base64Converter';
import moment from 'moment';

let movie = {
    name: 'Clockwork orange',
    distributionYear: 1967,
    duration: 120,
    genre: [1,2,3],
    releaseDate: moment(),
    sinopsys: 'Nesto nesto',
    director: 'Stanley Kubrick',
    actors: 'Alex Delarge',
    imdbLink: 'imdb',
}

class EditMovie extends React.Component {

    handleSubmit = (data) => {
        console.log('dejta', data)
        // base64Converter(data.picture).then(res => {
        //     data.picture = res
        // }
        // )
    }

    render() {
        return (
            <div className="container">
                <div className="form-wrapper">
                    <MovieForm
                    initialValues={movie}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            </div>

        )
    }

}

export default EditMovie