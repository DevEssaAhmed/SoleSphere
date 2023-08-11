import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apis/apiSlice';
import authReducer from './slices/authSlice'; // add this line

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productsApiSlice } from './apis/productsApiSlice';

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,

    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    auth: authReducer, // add this line
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
  devTools: true,
});
setupListeners(store.dispatch);

export { useGetProductsQuery } from './apis/productsApiSlice';
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
