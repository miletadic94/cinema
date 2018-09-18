import React from 'react'
import MovieForm from './movieForm'
import { base64Converter } from '../../../helpers/base64Converter';

class NewMovie extends React.Component {

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
                        onSubmit={this.handleSubmit}
                    />
                </div>
            </div>

        )
    }

}

export default NewMovie