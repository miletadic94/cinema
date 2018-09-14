import React from 'react'


class HeaderLink extends React.Component {

    render() {
        const { link, label, pathname} = this.props
        return (
            <li className={"nav-item" + (pathname === link ? ' active' : '')}>
                <a className="nav-link" href={link}>{label}</a>
            </li>

        )

    }
}

export default HeaderLink;