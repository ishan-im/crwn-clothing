import "./Product-Card.styles.scss";

import { useContext } from "react";

import { cartContext } from "../../context/cartContext";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addCartItems } = useContext(cartContext);

  const addProducts = () => addCartItems(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProducts}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
