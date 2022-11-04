import './shop.styles.scss'

import { useContext } from "react";

import { ProductContext } from "../../context/product-context";

import ProductCard from "../../components/Product-Card/Product-Card";

const Shop = () => {

const {products} = useContext(ProductContext)

  return (
    <div className="products-container">
      {products.map((products) => (
        <ProductCard key={products.id} product={products} />
      ))}
    </div>
  );
};


export default Shop;