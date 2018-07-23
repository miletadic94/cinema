import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {textAreaField, inputField, dropdownField, multipleDropdownField} from '../../../form-fields/formFields'
import { required } from '../../../helpers/validation'
import movies from '../../movies/moviesList'
let MovieForm = ({ handleSubmit }) => {
    return (
        <form className="" onSubmit={handleSubmit} >
            <Field
                name="name"
                component={inputField}
                type="text"
                label="movie name"
                placeholder="movie name"
                validate={required}
            />
            {/* <Field
                name="genre"
                options={movies}
                component={dropdownField}
                placeholder="Genre"
                validate={required}
            /> */}
                <Field
                name="genre"
                options={movies}
                component={multipleDropdownField}
                label="genre"
                placeholder="genre"
                validate={required}
            />
            <Field
                name="year"
                component={textAreaField}
                label="movie name"
                placeholder="Year"
                validate={required}
            />
            <button type="submit" className="btn btn-black">Add</button>
        </form>
    )


}

MovieForm = reduxForm({
    form: 'movieForm'
})(MovieForm)

export default MovieForm