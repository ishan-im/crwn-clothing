import './Cart-components.styless.scss'

import Icon from '../../assets/cart-icon'
import { useContext } from 'react'

import { cartContext } from '../../context/cartContext'

const CartIcon = ()=>{

const {isCartOpen,setIsCartOpen,cartCount} = useContext(cartContext)

const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen)

    return(
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <Icon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}


export default CartIcon