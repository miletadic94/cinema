import React from 'react'

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
        <li class="nav-item dropdown" onClick={this.toggleDropdown}>
          <a class="nav-link dropdown-toggle">
            Special
        </a>
        </li>
          {this.state.expand ? <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div> :null }
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    )
  }
}

export default Header