import React from "react";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Appliances = () => {
  const product = useSelector((state) => state.product.Products);
  console.log(product);
  const appliancesArr = product.filter((pro) => pro.category === "Appliances");
  console.log(appliancesArr);
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center sm:grid grid-rows-4 grid-cols-3 gap-4 justify-center justify-items-center">
        {appliancesArr.map((pro) => (
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

export default Appliances;
