import './Checkout-item.styles.scss'

import { useContext } from 'react';

import { cartContext } from '../../context/cartContext';


const CheckOutItem = ({cartItem}) => {

    const { name, imageUrl, price, quantity } = cartItem;

   
    const { removeCartItems, addCartItems,  clearItemsFromCart} = useContext(cartContext);

    const removeItemHandler= ()=> removeCartItems(cartItem);

    const addItemHandler= ()=> addCartItems(cartItem);

    const clearItemHandler = ()=> clearItemsFromCart(cartItem);
    
return(
    <div className='checkout-item-container'>
    <div className='image-container'>
      <img src={imageUrl} alt={`${name}`} />
    </div>
    <span className='name'> {name} </span>
    <span className='quantity'>
      <div className='arrow' onClick={removeItemHandler}>
        &#10094;
      </div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={addItemHandler}>
        &#10095;
      </div>
    </span>
    <span className='price'> {price}</span>
    <div className='remove-button' onClick={clearItemHandler}>
      &#10005;
    </div>
  </div>
)

}


export default CheckOutItem