import React from 'react'
import HeaderAdmin from '../../common/headerAdmin'
import MovieForm from './movieForm'

class NewMovie extends React.Component {

    handleSubmit = (data) => {
        console.log("Data ", data)
    }

    render() {
        return (
            <div className="container">
                <HeaderAdmin />
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