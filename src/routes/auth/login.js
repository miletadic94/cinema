import React from 'react'
import LoginForm from '../../forms/LoginForm'


class Login extends React.Component {

    handleSubmit = (data) => {
        console.log(data)
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