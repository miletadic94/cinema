import React from 'react'
import { connect } from 'react-redux'
import MovieForm from './movieForm'
import moment from 'moment';
import Modal from '../../../modal';
import { toggleModal } from '../../../redux/actions/modalAction'

let movie = {
    name: 'Clockwork orange',
    distributionYear: 1967,
    duration: 120,
    genre: [1, 2, 3],
    price: 1,
    releaseDate: moment(),
    sinopsys: 'Nesto nesto',
    director: 'Stanley Kubrick',
    actors: 'Alex Delarge',
    imdbLink: 'imdb',
}

const modal = {
    modalTitle: 'titl',
    modalMessage: 'message',
    modalButtonText: 'buttext',
    modalButtonAction: 'action',
}

class EditMovie extends React.Component {

    handleSubmit = (data) => {
        console.log('submit', data)
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
                <button onClick={() => this.props.toggleModal(modal)} type="button" className="btn btn-primary">Save changes</button>
            </div>

        )
    }

}

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
    toggleModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie)