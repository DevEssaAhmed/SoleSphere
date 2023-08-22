import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// Assuming these constants are defined correctly
import { PRODUCTS_URL, BASE_URL, UPLOAD_URL } from '../../constants';

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
    getProducts: builder.query({
      query: ({ pageNumber, keyword }) => ({
        url: PRODUCTS_URL,
        // You can add query parameters here if needed, like:
        params: { pageNumber, keyword },
      }),

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
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.productId}/reviews`,
        method: 'POST',
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
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
} = productsApiSlice;
export { productsApiSlice };
