import React from 'react'
import Header from './header';
import Footer from './footer';

class Wrapper extends React.Component {


    render() {
        const { pathname } = this.props.history.location
        const { children } = this.props
        return (
            <div>
                <Header path={pathname} />
                {children}
                <Footer />
            </div>
        )
    }
}

export default Wrapper