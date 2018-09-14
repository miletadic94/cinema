import React from 'react'
import { Field, reduxForm } from 'redux-form'
import InputField from '../form-fields/InputField'
import { required } from '../helpers/validation'
import { dateTimePicker } from '../form-fields/formFields';


let LoginForm = ({ handleSubmit }) => {

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <Field
                name="email"
                component={InputField}
                type="text"
                placeholder="Your email"
                validate={required}
            />
            <Field
                name="password"
                component={InputField}
                type="passowrd"
                placeholder="Your password"
                validate={required}
            />
            <Field
                name="datetime"
                placeholder='time'
                component={dateTimePicker}
            />
            <button type="submit" className="btn btn-dark"> Login </button>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm