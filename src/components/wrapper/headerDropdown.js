import React from 'react'
import classNames from 'classnames'

class HeaderDropdown extends React.Component {

    state = {
        active: false,
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    handleClick = e => {
        if (this.inputRef.contains(e.target)) {
            return;
        }
        this.handleClickOutside()
    }

    handleClickOutside = () => {
        this.setState({
            active: false
        })
    }


    toggleDropdown = e => {
        e.preventDefault();
        const { active } = this.state;
        this.setState({
            active: !active,
        });
    };


    render() {

        const { title } = this.props
        const { active } = this.state

        const liClass = classNames({
            'dropdown mr-4': true,
            active,
        });

        return (
            <li ref={c => (this.inputRef = c)} className={liClass}>
                <a className="nav-link d-flex " onClick={this.toggleDropdown}>
                <label>{title}</label>
                <i className="fas fa-chevron-down p-2"></i>
                </a>
                {active &&
                    <div className="dropdown-menu dropdown-menu-right d-block">
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

export default HeaderDropdown;
