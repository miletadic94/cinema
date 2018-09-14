import React from 'react'
import HeaderLink from './headerLink'
import HeaderDropdownOptions from './headerDropdownOptions'

class Header extends React.Component {


  render() {
    const { pathname } = this.props.history.location
    return (
      <ul className="nav nav-tabs nav-justified">
        <HeaderLink link="/" label="Home" pathname={pathname} />
        <HeaderLink link="/movies" label="Movies" pathname={pathname} />
        <HeaderDropdownOptions title={"Special"}  />
        <HeaderLink link="/projections" label="Projections" pathname={pathname} />
        <HeaderLink link="/aboutUs" label="About us" pathname={pathname} />
        <HeaderDropdownOptions title={"Your Account"} />
      </ul>
    )
  }
}

export default Header