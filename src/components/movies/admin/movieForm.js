import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { textAreaField, inputField, multipleDropdownField, datePicker } from '../../../form-fields/formFields'
import FileUpload from '../../../form-fields/FileUpload'
import { required } from '../../../helpers/validation'
import movies, { genres } from '../../movies/moviesList'
let MovieForm = ({ handleSubmit }) => {
    return (
        <form className="" onSubmit={handleSubmit} >
            <Field
                name="name"
                component={inputField}
                type="text"
                label="movie name"
                placeholder="movie name"
                // validate={required}
            />
            <Field
                name="distributionYear"
                component={inputField}
                type="number"
                label="distribution year"
                placeholder="Distribution Year"
                // validate={required}
            />
            <Field
                name="duration"
                component={inputField}
                type="number"
                label="duration"
                placeholder="Duration in minutes"
                // validate={required}
            />
            <Field
                name="genre"
                options={genres}
                type="select-multiple"
                component={multipleDropdownField}
                label="genre"
                placeholder="genre"
                // validate={required}
            />
            <Field
                name="releaseDate"
                component={datePicker}
                label="release date"
                placeholder="Date of Release"
                // validate={required}
            />
            <Field
                name="sinopsys"
                component={textAreaField}
                label="synopsis"
                placeholder="Movie details"
                // validate={required}
            />
            <Field
                name="director"
                component={inputField}
                type="text"
                label="director"
                placeholder="Director"
                // validate={required}
            />
            <Field
                name="actors"
                component={inputField}
                type="text"
                label="actors"
                placeholder="Actors"
                // validate={required}
            />
            <Field
                name="imdbLink"
                component={inputField}
                type="text"
                label="imdb"
                placeholder="Imdb Link"
                // validate={required}
            />
            <Field
                name="rottenTomatoesLink"
                component={inputField}
                type="text"
                label="rotten tomatoes"
                placeholder="Rotten Tomatoes Link"
                // validate={required}
            />
            <Field
                name="trailerId"
                component={inputField}
                type="text"
                label="Trailer"
                placeholder="Link To Youtube Trailer"
                // validate={required}
            />
            <Field
                name="picture"
                component={FileUpload}
                type="file"
                label="Picture"
                placeholder="Picture"
                // validate={required}
            />
            <button type="submit" className="btn btn-black">Add</button>
        </form>
    )


}

MovieForm = reduxForm({
    form: 'movieForm'
})(MovieForm)

export default MovieForm