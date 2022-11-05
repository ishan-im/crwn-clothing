import './shop.styles.scss'

import { useContext } from "react";

import { ProductContext } from "../../context/product-context";

import ProductCard from "../../components/Product-Card/Product-Card";

const Shop = () => {

const {products} = useContext(ProductContext)

  return (
    <div className="products-container">
      {products !== undefined && products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


export default Shop;