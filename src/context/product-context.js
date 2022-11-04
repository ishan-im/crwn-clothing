import { createContext ,useState} from "react";

import PRODUCTS from '../assets/shop-data.json'

export const ProductContext = createContext({
    products: [],
    setProducts: () => null
})


export const ProductsProvider = ({ children }) => {

    const [products,setProducts]= useState(PRODUCTS)

    const value = {products,setProducts}

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>


}