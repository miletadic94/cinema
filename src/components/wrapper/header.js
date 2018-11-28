import React from 'react'
import HeaderLink from './headerLink';
import HeaderDropdown from './headerDropdown';
import logo from '../../assets/img/logo.png'

class Header extends React.Component {
    render() {
        const { path } = this.props
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="fluid" src={logo} alt="logo"/>
                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <HeaderLink link="/" label="Home" path={path} />
                        <HeaderLink link="/movies" label="Movies" path={path} />
                        <HeaderDropdown title={"Special"} />
                        <HeaderLink link="/projections" label="Projections" path={path} />
                        <HeaderLink link="/aboutUs" label="About us" path={path} />
                        <HeaderDropdown title={"Your Account"} />
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;