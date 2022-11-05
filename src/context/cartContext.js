import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItems: () => {},
  cartCount: 0,
  removeCartItem: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addCartItems = (itemtoAdd) => {
    setCartItems(addCartItem(cartItems, itemtoAdd));
  };

  const removeCartItems = (itemtoremove) => {
    setCartItems(removeCartItem(cartItems, itemtoremove));
  };

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(newCartCount);
  }, [cartItems]);

  const clearItemsFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const [cartTotal, setCartTotals] = useState(0);

  useEffect(() => {

    const newCartTotals = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartTotals(newCartTotals);

  },[cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addCartItems,
    cartItems,
    cartCount,
    removeCartItems,
    clearItemsFromCart,
    cartTotal,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
