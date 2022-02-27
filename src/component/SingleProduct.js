import React, { useContext } from "react";
import { Cart } from "../Context";

export const SingleProduct = ({ prod }) => {
  const { id, name, price, image } = prod;

  const { cart, setCart } = useContext(Cart);

  return (
    <div className="products" style={{ backgroundColor: "grey" }}>
      <img src={image} alt={name}></img>
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{name}</span>
        <span>$ {price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="remove"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
