import React from 'react'
import HeaderLink from './headerLink';
import HeaderDropdown from './headerDropdown';
import logo from '../../assets/img/logo.png'
import { getAccessToken } from '../../services/authService';

class Header extends React.Component {
    render() {
        const { path } = this.props
        const token = getAccessToken();

        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top mb-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="fluid" src={logo} alt="logo" />
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
                        {
                            token ?
                                <HeaderDropdown title={"Your Account"} /> :
                                <React.Fragment>
                                    <HeaderLink link="/login" label="Login" path={path} />
                                    <HeaderLink link="/register" label="Register" path={path} />
                                </React.Fragment>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;