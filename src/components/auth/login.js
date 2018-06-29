import React from 'react'
import LoginForm from '../../forms/LoginForm'

class Login extends React.Component {

    handleSubmit = data => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="login-container container">
                <div className='login-form-wrapper'>
                    <LoginForm
                        onSubmit={this.handleSubmit}

                    />
                </div>
            </div>
        )
    }

}


export default Login