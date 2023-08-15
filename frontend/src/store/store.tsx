import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice'; // add this line

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productsApiSlice } from './apis/productsApiSlice';
import { userApiSlice } from './apis/userApiSlice';
import cartSliceReducer from './slices/cartSlice';
import { ordersApiSlice } from './apis/ordersApiSlice';

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    [ordersApiSlice.reducerPath]: ordersApiSlice.reducer,
    auth: authReducer, // add this line
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware): any =>
    // getDefaultMiddleware()
    //   .concat(productsApiSlice.middleware)
    //   .concat(userApiSlice.middleware),

    getDefaultMiddleware({})
      .concat([productsApiSlice.middleware])
      .concat([userApiSlice.middleware])
      .concat([ordersApiSlice.middleware]),
  devTools: true,
});
setupListeners(store.dispatch);

export { useGetProductsQuery } from './apis/productsApiSlice';
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
