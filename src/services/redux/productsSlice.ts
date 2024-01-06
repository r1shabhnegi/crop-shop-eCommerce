import { productSliceTYP } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: productSliceTYP = {
  products: [],
  status: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    products: (state, action) => {
      state.products = action.payload;
    },
    status: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { products, status } = productsSlice.actions;
export default productsSlice.reducer;
