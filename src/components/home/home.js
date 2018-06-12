import React from 'react'
import { connect } from 'react-redux'
import Header from '../common/header'

class Home extends React.Component {

    handleDropdown = () => {
        console.log('jesam')
    }


    render() {
        console.log(this.props)
        return (
           <Header route={this.props.history.location.pathname}/>
        )
    }
}


export default Home