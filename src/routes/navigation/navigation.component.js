import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

import React, { Fragment, useContext } from "react";

import { cartContext } from "../../context/cartContext";

import CartIcon from "../../components/Cart/Cart-component";

import CartDropdown from "../../components/Cart-Dropdown/Cart-Dropdown";

import Icon from "../../assets/crown";
import { UserContext } from "../../context/use.context";

import { signOutAuthUser } from "../../utils/firebase/firebase-util";

function Navigation() {
  const { isCartOpen } = useContext(cartContext);

  const { currentUser } = useContext(UserContext);

  console.log("current user: ", currentUser);

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

          {currentUser && (
            <span className="nav-link" onClick={signOutAuthUser}>
              Sign Out
            </span>
          )}

          {!currentUser && (
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
