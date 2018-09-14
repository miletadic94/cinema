import React from 'react'
import MovieForm from './movieForm'

class NewMovie extends React.Component {

    handleSubmit = (data) => {
        console.log("Data ", data)
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