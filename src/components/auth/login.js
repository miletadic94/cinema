import React from 'react'
import LoginForm from '../../forms/LoginForm'
import HeaderAdmin from '../common/headerAdmin'


class Login extends React.Component {

    handleSubmit = (data) => {
        console.log(data)
    }
    render() {
        return (
            <div className="container">
               <HeaderAdmin />
                    <LoginForm
                        onSubmit={this.handleSubmit}
                    />
            </div>
        )
    }

}


export default Login