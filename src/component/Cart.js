import React, { useContext, useEffect, useState } from "react";
import { SingleProduct } from "./SingleProduct";
import { Cart as Carts } from "./../Context";

export const Cart = () => {
  const { cart, setCart } = useContext(Carts);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>{total}</span>
      <div className="productContainer">
        {cart.map((singleItem) => {
          return (
            <SingleProduct
              prod={singleItem}
              key={singleItem.id}
            ></SingleProduct>
          );
        })}
      </div>
    </div>
  );
};
