import { Link, Outlet } from "react-router-dom";

import './navigation.styles.scss';

import React, { Fragment } from 'react'

import Icon from '../../assets/crown';

function Navigation() {
  return (
    <Fragment>
    <nav className="navigation">
        <Link className="logo-container" to='/'>
        <Icon className='logo'/>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                Shop
            </Link>

            <Link className="nav-link" to="/sign-in">
                Sign In
            </Link>
        </div>
    </nav>
   <Outlet/>
    </Fragment>
  )
}

export default Navigation