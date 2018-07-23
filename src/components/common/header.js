import React from 'react'
import HeaderDropdownOptions from './headerDropdownOptions'

class Header extends React.Component {

  state = ({
    expand: false,
  })

  toggleDropdown = (e) => {
    this.setState({
      expand: true,
    })
  }

  render() {
    const { route } = this.props
    return (
      <ul className="nav nav-tabs nav-justified">
        <li className={"nav-item" + (route === '/' ? ' active' : '')}>
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className={"nav-item" + (route === '/movies' ? ' active' : '')}>
          <a className="nav-link" href="/movies">Movies</a>
        </li>
        <li className={"nav-item" + (route === '/projections' ? ' active' : '')}>
          <a className="nav-link" href="/projections">Projections</a>
        </li>
        <li className="nav-item dropdown" onClick={this.toggleDropdown}>
          <a className="nav-link dropdown-toggle">
            Special
        </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <HeaderDropdownOptions />
      </ul>
    )
  }
}

export default Header