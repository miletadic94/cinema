import React from 'react'
import classNames from 'classnames'

class HeaderDropdownOptions extends React.Component {
    
    state = {
        expanded: false,
    }

    toggleExpand = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    }
    hideOptions  = () => {
        this.setState({
            expanded: false
        })
    }

    handleClickOutside = event =>  this.hideOptions()

    render() {

        const optGroupClassName = classNames(
            'nav-item dropdown',
            {open: this.state.expanded}
        )

        return (

            <li className={'nav-item dropdown'} onClick={this.toggleExpand}>
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        )
    }
}

export default HeaderDropdownOptions
