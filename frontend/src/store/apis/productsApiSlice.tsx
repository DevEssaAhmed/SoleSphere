import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// Assuming these constants are defined correctly
import { PRODUCTS_URL, BASE_URL } from '../../constants';

interface IProduct {
  _id: string;
  user: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  reviews: Array<string>;
  sizes: Array<string>;
  colors: Array<string>;
}

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

const productsApiSlice = createApi({
  reducerPath: 'productsApiSlice',

  baseQuery,
  tagTypes: ['Products', 'Order', 'User'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: PRODUCTS_URL,
        // You can add query parameters here if needed, like:
        // params: { keyword, pageNumber },
      }),
      transformResponse: (response: IProduct[]) => response,
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
    getProductsDetails: builder.query<IProduct, string>({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      transformResponse: (response: IProduct) => response,
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST',
      }),
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data._id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

// Export the generated hooks and slice
export const {
  useGetProductsQuery,
  useGetProductsDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productsApiSlice;
export { productsApiSlice };
