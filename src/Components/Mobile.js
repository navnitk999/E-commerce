import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";

const Mobile = () => {
  const product = useSelector((state) => state.product.Products);
  console.log(product);
  const mobileArr = product.filter((pro) => pro.category === "Mobile");
  console.log(mobileArr);

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center sm:grid grid-rows-4 grid-cols-3 gap-4 justify-center justify-items-center">
        {mobileArr.map((pro) => (
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

export default Mobile;
