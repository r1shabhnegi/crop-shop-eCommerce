import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import authSlice from './authSlice';
// ...

export const store = configureStore({
  reducer: {
    products: productsSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
