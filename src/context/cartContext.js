import { createContext, useState ,useEffect} from "react";

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

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItems: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addCartItems = (itemtoAdd) => {
    setCartItems(addCartItem(cartItems, itemtoAdd));
  };

  const [cartCount,setCartCount] = useState(0)

  
useEffect(()=>{

   const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0) 

   setCartCount(newCartCount)

},[cartItems])

 

  const value = { isCartOpen, setIsCartOpen,addCartItems,cartItems,cartCount };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
