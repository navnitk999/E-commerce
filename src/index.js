import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Mobile from "./Components/Mobile";
import Appliances from "./Components/Appliances";
import Furniture from "./Components/Furniture";
import Fashion from "./Components/Fachion";
import Toys from "./Components/Toys";
import Laptop from "./Components/Laptop";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import BuyNow from "./Components/BuyNow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Toys" element={<Toys />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/buynow" element={<BuyNow />}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
