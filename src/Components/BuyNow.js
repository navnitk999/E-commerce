import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import backBtn from "../assets/logo/icons8-back-arrow.gif";
import { removeProduct } from "../Slice/BuyNowSlice";
import confetti from "canvas-confetti";

const BuyNow = () => {
  const product = useSelector((state) => state.buyNow.BuyNowProducts);
  console.log(product);
  const placeOrderBtn = useRef();
  const placeOrderBtn2 = useRef();
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState({ selectValue: 1 });

  const handleChange = (event) => {
    setItemCount({ selectValue: event.target.value });
  };

  const celebration = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const confirmOrder = () => {
    placeOrderBtn.current.classList.add("hidden");
    placeOrderBtn2.current.classList.remove("hidden");
    placeOrderBtn2.current.classList.add("block");
    celebration();
  };

  return (
    <div className="h-[100vh] p-16 flex flex-col justify-center items-center bg-[#242B2E]">
      <div className="flex justify-center items-center w-fit bg-[#d8efef] p-5 rounded-md">
        <div className="mr-10">
          <img
            src={product[product.length - 1].image}
            alt="product image"
            className="w-[100px]"
          />
          <div className="flex justify-center items-center bg-[#ffffff] mt-3">
            <p>Qty:</p>
            <select
              name="Qty:"
              id="select"
              className="outline-none"
              onChange={handleChange}
            >
              <option value="1" selected="true">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
        <div className="pb-10 pr-28">
          <p className="text-2xl font-bold text-[#120E43] mb-4">
            {product[product.length - 1].name}
          </p>
          <p className="text-lg font-semibold">
            {product[product.length - 1].price}
          </p>
          {/* <button className="bg-[#c7e1e3]">Place Order</button> */}
        </div>
      </div>
      <div className="bg-[#b2e8f4] px-10 mt-5 sm:mt-5 sm:px-20 rounded-md py-3">
        <p className="text-lg font-semibold text-center text-[#03203C]">
          Price : {product[product.length - 1].price}
        </p>
        <p className="text-lg font-semibold text-center text-[#03203C]">
          Delivery Charge : 20.00
        </p>
        <div className="border-t-2 border-[#03203C]"></div>
        <p className="text-lg font-semibold text-center text-[#2827CC]">
          Total :{" "}
          {(Number(product[product.length - 1].price) + 20) *
            Number(itemCount.selectValue)}
        </p>
      </div>
      <div>
        <button
          className="bg-[#FB641B] text-[#ffffff] mt-4 px-4 py-2 rounded-md"
          ref={placeOrderBtn}
          onClick={confirmOrder}
        >
          Place Order
        </button>
        <button
          className="hidden bg-[#2afb1b] text-[#03203C] mt-4 px-4 py-2 rounded-md"
          ref={placeOrderBtn2}
        >
          Your order has been placed Thankyou !
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
