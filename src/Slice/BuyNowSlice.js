import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BuyNowProducts: [],
};

export const buyNowSlice = createSlice({
  name: "BuyNowSlice",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const pro = {
        image: action.payload.image,
        name: action.payload.name,
        price: action.payload.price,
        category: action.payload.category,
      };

      // if (
      //   !state.BuyNowProducts.some((prd) =>
      //     prd.name === pro.name ? true : false
      //   )
      // ) {
      //   state.BuyNowProducts.push(pro);
      // }

      state.BuyNowProducts.push(pro);
    },
    removeProduct: (state, action) => {
      // state.BuyNowProducts = state.BuyNowProducts.filter(
      //   (pro) => pro.name !== action.payload
      // );

      state.BuyNowProducts.length = 0;
    },
  },
});

export const { addProducts, removeProduct } = buyNowSlice.actions;
export default buyNowSlice.reducer;
