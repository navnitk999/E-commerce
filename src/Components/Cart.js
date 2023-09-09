import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../CartSlice";
import emptyCartImg from "../assets/logo/5140139.jpg";
import { addProducts } from "../Slice/BuyNowSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.ProductArray);
  const dispatch = useDispatch();

  //   console.log(cartProducts);

  const emptyCartSection = useRef();

  const checkImage = () => {
    if (cartProducts.length >= 1) {
      emptyCartSection.current.classList.remove("block");
      emptyCartSection.current.classList.add("hidden");
    } else {
      emptyCartSection.current.classList.remove("hidden");
      emptyCartSection.current.classList.add("block");
    }
  };

  useEffect(() => {
    checkImage();
  }, []);

  return (
    <>
      <NavBar />
      <div
        className=" flex flex-col justify-center items-center h-[80vh]"
        ref={emptyCartSection}
      >
        <div className="flex justify-center items-center">
          <img
            src={emptyCartImg}
            alt="empty cart image"
            title="empty cart image"
            className=" w-[80%] sm:h-[65vh] sm:w-[90%]"
          />
        </div>
        <div>
          <p className="text-center sm:text-[#120E43] text-4xl font-semibold">
            Please Add some items to cart
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:grid grid-flow-row grid-cols-3">
        {cartProducts.map((pro) => (
          <div
            className="flex justify-center items-center bg-[#CAD5E2] w-fit py-7 pl-3 pr-8 m-3 rounded-lg sm:pr-28 sm:pl-10"
            key={pro.name}
          >
            <div>
              <img
                src={pro.image}
                alt="product image"
                className="w-[100px] h-[150px] mr-4 sm:mr-8"
              />
            </div>
            <div>
              <div>
                <p className="text-[#03203C] text-xl font-semibold mb-2">
                  {pro.name}
                </p>
                <p className="text-[#03203C] text-lg font-semibold mb-2">
                  {pro.price}
                </p>
              </div>
              <div>
                <Link to="/BuyNow">
                  <button
                    className="bg-[#03203C] text-[#CAD5E2] px-3 py-2 rounded-md mr-3"
                    onClick={() =>
                      dispatch(
                        addProducts({
                          image: pro.image,
                          name: pro.name,
                          price: pro.price,
                          category: pro.category,
                        })
                      )
                    }
                  >
                    Buy Now
                  </button>
                </Link>
                <button
                  className="bg-[#03203C] text-[#CAD5E2] px-3 py-2 rounded-md "
                  onClick={() => {
                    dispatch(removeItemFromCart(pro.name));
                    checkImage();
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
