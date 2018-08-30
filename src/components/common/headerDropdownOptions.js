import React from 'react'
import classNames from 'classnames'

class HeaderDropdownOptions extends React.Component {

    constructor() {
        super();

        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    state = {
        active: false,
    }

    toggleDropdown = (e) => {
        const { active } = this.state
        this.setState({
            active: !active,
        })
    }


    render() {

        const optGroupClassName = classNames(
            'nav-item dropdown',
            { open: this.props.expanded }
        )

        return (

            <li className={'nav-item dropdown'}>
                <a className="nav-link dropdown-toggle" onClick={this.toggleDropdown}>Dropdown</a>
                {this.state.active &&
                    <div className="menu-dropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>}
            </li>
        )
    }
}

export default HeaderDropdownOptions
