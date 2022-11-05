import { createContext ,useState,useEffect} from "react";

import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase-util.js";



export const ProductContext = createContext({
    products: [],
    setProducts: () => null
})


export const ProductsProvider = ({ children }) => {

    const [products,setProducts]= useState([])

    useEffect(()=>{

        const getProducts = async ()=>{
            const products = await getCategoriesAndDocuments()
            console.log(products);
            setProducts(products)
        }

        getProducts()

    },[])


    const value = {products,setProducts}

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>


}