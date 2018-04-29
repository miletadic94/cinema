import React from 'react'
import Menu from './menu'

class PageWrapper extends React.Component {

    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
            </div>
        )
    }
}

export default PageWrapper