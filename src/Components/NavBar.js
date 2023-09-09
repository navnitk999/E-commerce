import React, { useState } from "react";
import logo from "../assets/logo/shop-logo-good-600w-1290022027.webp";
import cart from "../assets/logo/icons8-fast-cart-24.png";
import search from "../assets/logo/icons8-find-67.png";
import home from "../assets/logo/icons8-home-24.png";
import { Link } from "react-router-dom";
import hamburger from "../assets/logo/icons8-hamburger-32.png";
import multiply from "../assets/logo/icons8-multiply-30.png";
import { useSelector } from "react-redux";


const NavBar = () => {
  // const product = useSelector((state) => state.cart.ProductArray);
  // const [productCount, setProductCount] = useState(product.length);
  // console.log(productCount);


  const showMobileViewMeanu = () => {
    const hamburger = document.querySelector("#hamburger");
    const cross = document.querySelector("#cross");
    const mobileViewMeanu = document.querySelector("#mobileViewMeanu");

    // console.log(hamburger,cross,mobileViewMeanu);

    hamburger.classList.add("hidden");
    cross.classList.remove("hidden");
    cross.classList.add("block");
    mobileViewMeanu.classList.remove("hidden");
    mobileViewMeanu.classList.add("block");
  };

  const hiddenMobileMeanu = () => {
    const hamburger = document.querySelector("#hamburger");
    const cross = document.querySelector("#cross");
    const mobileViewMeanu = document.querySelector("#mobileViewMeanu");

    cross.classList.remove("block");
    cross.classList.add("hidden");
    hamburger.classList.remove("hidden");
    hamburger.classList.add("block");
    mobileViewMeanu.classList.remove("block");
    mobileViewMeanu.classList.add("hidden");
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-[#2874F0] p-3">
        <div>
          <img className="w-[50px]" src={logo} alt="logo" title="Logo"/>
        </div>
        <div className="hidden sm:block sm:flex sm:bg-[#ffffff]">
          <input
            className="outline-none py-3 pl-3 pr-10"
            type="text"
            placeholder="Enter name"
          />
          <img className="w-[40px] m-2" src={search} alt="search icon" />
        </div>
        <div className="flex justify-center items-center">
          <Link to="/home">
            <img className="hover:w-[30px] mr-10" src={home} alt="home icon" title="Home"/>
          </Link>
          <Link to="/cart">
            <img className="hover:w-[30px] " src={cart} alt="cart logo" title="Cart"/>
          </Link>

          <img
            className="ml-10 w-[28px] sm:hidden"
            id="hamburger"
            onClick={showMobileViewMeanu}
            src={hamburger}
            alt="hamburger img"
          />
          <img
            className="ml-10 w-[30px] hidden sm:hidden"
            id="cross"
            onClick={hiddenMobileMeanu}
            src={multiply}
            alt="multiply icon"
          />
        </div>
      </nav>
      <div className=" hidden sm:block sm:flex justify-between items-center bg-[#CAD5E2] text-[#03203C] py-4 px-3">
        <Link to="/Mobile">
          <button className="font-bold text-md">Mobile</button>
        </Link>

        <Link to="/Fashion">
          <button className="font-bold text-md">Fashion</button>
        </Link>

        <Link to="/Laptop">
          <button className="font-bold text-md">Laptop</button>
        </Link>

        <Link to="/Furniture">
          <button className="font-bold text-md">Furniture</button>
        </Link>

        <Link to="/Appliances">
          <button className="font-bold text-md">Appliances</button>
        </Link>

        <Link to="/Toys">
          <button className="font-bold text-md">Toys</button>
        </Link>

        {/* <button className="font-bold text-md">Fashion</button>
        <button className="font-bold text-md">Laptop</button>
        <button className="font-bold text-md">Furniture</button>
        <button className="font-bold text-md">Appliances</button>
        <button className="font-bold text-md">Toys</button> */}
      </div>

      <div className="hidden z-10  sm:hidden" id="mobileViewMeanu">
        <ul className="flex flex-col items-end">
          <li className="my-3 mr-4 text-xl font-semibold  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Link to="/Mobile">Mobile</Link>
          </li>
          <li className="my-3 mr-4 text-xl font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Link to="/Fashion">Fashion</Link>
          </li>
          <li className="my-3 mr-4 text-xl font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Link to="/Laptop">Laptop</Link>
          </li>
          <li className="my-3 mr-4 text-xl font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Link to="/Furniture">Furniture</Link>
          </li>
          <li className="my-3 mr-4 text-xl font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Link to="/Appliances">Appliances</Link>
          </li>
          <li className="my-3 mr-4 text-xl font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Link to="/Toys">Toys</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
