import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../forms/LoginForm'

class Login extends React.Component {

    handleSubmit = data => {
        this.props.history.push('/')
        console.log("SUCCESSFULLY", data)
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

const mapStateToProps = ({ movies }) => ({
    movies: movies,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, null)(Login)