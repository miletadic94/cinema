import React from 'react'
import Header from '../common/header'

class Home extends React.Component {

    handleDropdown = () => {
    }


    render() {
        return (
            <div className="container">
                <Header route={this.props.history.location.pathname} />
            </div>
        )
    }
}


export default Home