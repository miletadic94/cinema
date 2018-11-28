import React from 'react'

class HeaderAdmin extends React.Component {
  render() {
    const { route } = this.props
    return (
      <ul className="nav nav-tabs nav-justified">
        <li className={"nav-item" + (route === '/' ? ' active' : '')}>
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className={"nav-item" + (route === '/movies' || '/admin/movies' ? ' active' : '')}>
          <a className="nav-link" href="/admin/movies">Movies</a>
        </li>
        <li className={"nav-item" + (route === '/projections' ? ' active' : '')}>
          <a className="nav-link" href="/projections">Projections</a>
        </li>
        <li className={"nav-item" + (route === '/projections' ? ' active' : '')}>
          <a className="nav-link" href="/projections">Users</a>
        </li>
        <li className={"nav-item" + (route === '/projections' ? ' active' : '')}>
          <a className="nav-link" href="/projections">Reservations</a>
        </li>
      </ul>
    )
  }
}

export default HeaderAdmin