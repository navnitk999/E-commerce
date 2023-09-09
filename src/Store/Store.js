import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../ProductSlice';
import cartReducer from '../CartSlice';
import buyNowReducer from '../Slice/BuyNowSlice';

export const store = configureStore({
  reducer: {
    product:productReducer,
    cart:cartReducer,
    buyNow:buyNowReducer,
  },
});
