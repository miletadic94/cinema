import React from 'react'
import LoginForm from '../../forms/LoginForm'
import { loginService, setAccessToken } from '../../services/authService';
import { SubmissionError } from 'redux-form';


class Login extends React.Component {

    handleSubmit = (data) => {
        loginService(data).then(({ data }) =>
            setAccessToken(data.token))
            .catch(err => {
                throw new SubmissionError({_error: err})
            })
    }

    render() {
        return (
            <div className="container">
                <LoginForm
                    onSubmit={this.handleSubmit}
                />
            </div>
        )
    }

}


export default Login