import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

import { ORDERS_URL, BASE_URL } from '../../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
// interface OrderItem {
//   name: string;
//   qty: number;
//   price: string;
//   product: any;
// }

// interface ShippingAddress {
//   address: string;
//   city: string;
//   postalCode: string;
//   country: string;
// }

// interface PaymentResult {
//   id: string;
//   status: string;
//   update_time: string;
//   email_address: string;
// }

// interface IOrder {
//   user: any;
//   orderItems: OrderItem[];
//   shippingAddress: ShippingAddress;
//   paymentMethod: string;
//   paymentResult: PaymentResult;
//   itemsPrice: number;
//   taxPrice: number;
//   shippingPrice: number;
//   totalPrice: number;
//   isPaid: boolean;
//   paidAt: Date;
//   isDelivered: boolean;
// }

const ordersApiSlice = createApi({
  reducerPath: 'ordersApiSlice',

  baseQuery,
  tagTypes: ['Products', 'Order', 'User'],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: { ...order },
      }),
    }),
    getOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/myorders`,
      }),
      keepUnusedDataFor: 5,
    }),
    getOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
    payOrder: builder.mutation<{ orderId: string; details: any }, any>({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: 'PUT',
        body: { ...details },
      }),
    }),
    deliverOrder: builder.mutation<{ orderId: string }, any>({
      query: ({ orderId }) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: 'PUT',
      }),
    }),
  }),
});

// Export the generated hooks and slice
export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
} = ordersApiSlice;
export { ordersApiSlice };
