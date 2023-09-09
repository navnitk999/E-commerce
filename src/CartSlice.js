import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  ProductArray: [],
};

export const productCartSlice = createSlice({
  name: "ProductCart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = {
        image:action.payload.img,
        price:action.payload.price,
        name:action.payload.name,
        category:action.payload.category,
      };

      if (
        state.ProductArray.some((pro) =>
          pro.name === product.name ? true : false
        )
      ) {
        console.log(`Present in Cart`);
      } else {
        state.ProductArray.push(product);
      }
    },
    removeItemFromCart:(state,action)=>{
      state.ProductArray = state.ProductArray.filter((pro)=> pro.name !== action.payload);
    }
  },
});

export const { addProductToCart,removeItemFromCart } = productCartSlice.actions;
export default productCartSlice.reducer;
