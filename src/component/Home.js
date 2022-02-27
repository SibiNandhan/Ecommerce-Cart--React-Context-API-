import React, { useContext, useState } from "react";
import faker from "faker";
import { SingleProduct } from "./SingleProduct";
import { Cart } from "./../Context";
faker.seed(100);

export const Home = () => {
  const { cart, setCart } = useContext(Cart);
  console.log(useContext(Cart));
  const productArray = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
    };
  });

  const [products] = useState(productArray);

  return (
    <div className="productContainer">
      {products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id}></SingleProduct>;
      })}
    </div>
  );
};
