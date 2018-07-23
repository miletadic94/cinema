import React from 'react'
import Header from '../common/header'

class Home extends React.Component {

    handleDropdown = () => {
    }


    render() {
        const {pathname} = this.props.history.location
        return (
            <div className="container">
                <Header route={pathname} />
            </div>
        )
    }
}


export default Home