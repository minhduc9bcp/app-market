import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartSlice from './cartSlice';
import productSlice from './productSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        cart: cartSlice,
        products: productSlice,
    },
});

