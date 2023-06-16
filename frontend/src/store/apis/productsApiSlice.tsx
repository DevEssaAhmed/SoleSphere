import { PRODUCTS_URL } from '../../constants';
import { apiSlice } from './apiSlice';

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
        // params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
export { productsApiSlice } 
