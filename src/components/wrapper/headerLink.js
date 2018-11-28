import React from 'react'

class HeaderLink extends React.Component {

    render() {
        const { link, label, path} = this.props
        return (
            <li className={"nav-item pr-4" + (path === link ? ' active' : '')}>
                <a className="nav-link" href={link}>{label}</a>
            </li>

        )

    }
}

export default HeaderLink;