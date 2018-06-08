import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../forms/LoginForm'

class Login extends React.Component {

    handleSubmit = data => {
        console.log("SUCCESSFULLY", data)
    }

    render() {
        return (
            <div className="container">
                <h3>Welcome to ArenaMileplex</h3>
                <h4>Please login</h4>
                <LoginForm
                    onSubmit={this.handleSubmit}
                />
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