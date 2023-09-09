import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
};

export const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const pro = {
        image: action.payload[0],
        name: action.payload[1],
        price: action.payload[2],
        category: action.payload[3],
      };

      if (
        state.Products.some((prod) => (prod.name === pro.name ? true : false))
      ) {
        console.log(`Present`);
      } else {
        state.Products.push(pro);
      }
      // state.Products.push(pro);
    },
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
