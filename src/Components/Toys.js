import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Toys = () => {
  const product = useSelector((state) => state.product.Products);
  console.log(product);
  const toyArr = product.filter((pro) => pro.category === "Toy");
  console.log(toyArr);
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center sm:grid grid-rows-4 grid-cols-3 gap-4 justify-center justify-items-center">
        {toyArr.map((pro) => (
          <ProductCard
            img={pro.image}
            name={pro.name}
            price={pro.price}
            category={pro.category}
          />
        ))}
      </div>
    </>
  );
};

export default Toys;
