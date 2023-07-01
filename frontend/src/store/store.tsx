import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apis/apiSlice';
import authReducer from './slices/authSlice'; // add this line

import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer, // add this line
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
setupListeners(store.dispatch);

export { useGetProductsQuery } from './apis/productsApiSlice';
