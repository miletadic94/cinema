import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { inputField } from '../form-fields/formFields'
import { required } from '../helpers/validation'


let LoginForm = ({ onSubmit, handleSubmit, error }) => {
    console.log('er', error)

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <Field
                name="username"
                component={inputField}
                type="text"
                placeholder="Your email"
                validate={[required]}
            />
            <Field
                name="password"
                component={inputField}
                type="passowrd"
                placeholder="Your password"
                validate={required}
            />
            <div className="row">
                <div className="col col-lg text-center">
                    <button type="submit" className="btn btn-dark"> Login </button>
                </div>
            </div>

            <br />
            {/* TODO: css class for submission errors */}
            {error ? <div >{error.message}</div> : null}
        </form>
    )
}

LoginForm = reduxForm({
    form: 'login',
    enableReinitialize: true,
})(LoginForm)

export default LoginForm