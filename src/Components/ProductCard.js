import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../ProductSlice";
import { addProductToCart } from "../CartSlice";
import { Link } from "react-router-dom";
import { addProducts } from "../Slice/BuyNowSlice";

const ProductCard = ({ img, name, price, category }) => {
  const dispatch = useDispatch();
  // const [productImage, setImage] = useState(img);
  // const [productName, setName] = useState(name);
  // const [productPrice, setPrice] = useState(price);
  // const [productCatgory, setCatgory] = useState(category);

  dispatch(addProduct([img, name, price, category]));

  return (
    <div className="flex flex-col items-center justify-center border rounded-md shadow-2xl w-fit  p-5 m-4 z-1 hover:scale-110 transition duration-700 ease-in-out sm:my-6">
      <div>
        <img className="w-[200px] h-[250px]" src={img} alt="img" />
      </div>
      <div className="p-3 flex flex-col items-center">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/BuyNow">
          <button
            className="bg-[#FB641B] text-[#ffffff] py-3 px-5 font-semibold mr-5"
            onClick={() =>
              dispatch(
                addProducts({
                  image: img,
                  name: name,
                  price: price,
                  category: category,
                })
              )
            }
          >
            Buy Now
          </button>
        </Link>

        <button
          className="bg-[#FF9F00] text-[#ffffff] py-3 px-5 font-semibold"
          id="addToCart"
          onClick={() =>
            dispatch(
              addProductToCart({
                img: img,
                name: name,
                price: price,
                category: category,
              })
            )
          }
        >
          Add To cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
