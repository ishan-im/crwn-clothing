import React, { useContext } from "react";

import Button from "../button/button.component";


import { cartContext } from "../../context/cartContext";

import "./CartDropdown.styles.scss";

import CartItem from "../Cart-Item/CartItem";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {

    const { cartItems} = useContext(cartContext);

    const navigaye = useNavigate();

    const goToCheckout = ()=> navigaye('/checkout')

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Button onClick={goToCheckout}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
