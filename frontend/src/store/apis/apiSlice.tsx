// @ts-nocheck
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL, PAYPAL_URL } from '../../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery,
  tagTypes: ['Products', 'Order', 'User'],
  endpoints: (builder) => ({
    getPayPalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useGetPayPalClientIdQuery } = apiSlice;
export default apiSlice; // Add the 'default' keyword here
