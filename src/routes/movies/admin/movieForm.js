import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { textAreaField, inputField, dropdownField, multipleDropdownField, datePicker, checkboxField } from '../../../form-fields/formFields'
import FileUpload from '../../../form-fields/FileUpload'
import { required } from '../../../helpers/validation'
import movies, { genres } from '../../movies/moviesList'

const prices = [{ id: 0, name: 100 }, { id: 1, name: 200 }];

class MovieForm extends React.Component {

    handle3DChange = (e) => {
        const { value } = e.target
        const { change, touch } = this.props
        if (value === "true") {
            change('price', 0)
            touch('price')
        } else {
            change('price', 1)
            touch('price')
        }
    }

    render() {

        const { initialValues, openDeleteModal, handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit} >
                <div className="row mb-2">
                    <div className="col-10">
                        <Field
                            name="name"
                            component={inputField}
                            type="text"
                            label="movie name"
                            placeholder="movie name"
                        // validate={required}
                        />
                    </div>
                    <div className="col-2">
                        <Field
                            name="3d"
                            id="3d"
                            component="input"
                            component={checkboxField}
                            label="3d"
                            onChange={this.handle3DChange}
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <Field
                            name="price"
                            value={1}
                            options={prices}
                            component={dropdownField}
                            label="Price"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <Field
                            name="distributionYear"
                            component={inputField}
                            type="number"
                            label="distribution year"
                            placeholder="Distribution Year"
                        // validate={required}
                        />
                    </div>
                    <div className="col-6">
                        <Field
                            name="duration"
                            component={inputField}
                            type="number"
                            label="duration"
                            placeholder="Duration in minutes"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <Field
                            name="genre"
                            options={genres}
                            type="select-multiple"
                            component={multipleDropdownField}
                            label="genre"
                            placeholder="genre"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <Field
                            name="releaseDate"
                            component={datePicker}
                            label="release date"
                            placeholder="Date of Release"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <Field
                            name="sinopsys"
                            component={textAreaField}
                            label="synopsis"
                            placeholder="Movie details"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <Field
                            name="director"
                            component={inputField}
                            type="text"
                            label="director"
                            placeholder="Director"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <Field
                            name="actors"
                            component={inputField}
                            type="text"
                            label="actors"
                            placeholder="Actors"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-6">
                        <Field
                            name="imdbLink"
                            icon="fab fa-imdb"
                            component={inputField}
                            type="text"
                            label="imdb"
                            placeholder="Imdb Link"
                        // validate={required}
                        />
                    </div>
                    <div className="col-6">
                        <Field
                            name="rottenTomatoesLink"
                            component={inputField}
                            type="text"
                            label="rotten tomatoes"
                            placeholder="Rotten Tomatoes Link"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <Field
                            name="trailerId"
                            icon="fab fa-youtube"
                            component={inputField}
                            type="text"
                            label="Trailer"
                            placeholder="Link To Youtube Trailer"
                        // validate={required}
                        />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        <Field
                            name="picture"
                            component={FileUpload}
                            type="file"
                            label="Picture"
                            placeholder="Picture"
                        // validate={required}
                        />
                    </div>
                </div>
                {
                    initialValues ?
                        <div className="text-center mb-2">
                            <button type="submit" className="btn btn-black">Edit Movie!</button>
                            <button type="button" className="btn btn-danger ml-2">Delete Movie!</button>
                        </div>
                        :
                        <div className="text-center mb-2">
                            <button type="submit" className="btn btn-black">Create New Movie!</button>
                        </div>
                }
            </form>
        )
    }
}

MovieForm = reduxForm({
    form: 'movieForm',
    initialValues: {
        price: 0,
    }
})(MovieForm)

export default MovieForm