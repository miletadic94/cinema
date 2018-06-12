import React from 'react'
import {connect} from 'react-redux'

const Header = ({route}) => {

    console.log("ROUTE", route)

        return(
            <ul className="nav nav-pills">
            <li className="nav-item">
              <a className={"nav-link" + (route==='/' ? ' active' : '')} href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + (route==='/movies' ? ' active' : '')} href="/movies">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projections</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        )
    }


export default Header