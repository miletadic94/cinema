import React from 'react'
import {Field, reduxForm} from 'redux-form'
import InputField from '../form-fields/InputField'

let LoginForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="email"
                component={InputField}
                type="text"
                placeholder="Your email"
            />
             <Field
                name="password"
                component={InputField}
                type="passowrd"
                placeholder="Your password"
            />
            <button type="submit" className="btn btn-dark"> Login </button>
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm