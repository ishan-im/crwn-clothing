import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

import React, { Fragment, useContext } from "react";

import Icon from "../../assets/crown";
import { UserContext } from "../../context/use.context";

import { signOutAuthUser } from "../../utils/firebase/firebase-util";

function Navigation() {
  const { curentUser,setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {

    const res = await signOutAuthUser();
    setCurrentUser(null);
    console.log(res);
    
  };

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <Icon className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {curentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
