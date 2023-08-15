import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

import { ORDERS_URL, BASE_URL } from '../../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
interface OrderItem {
  name: string;
  qty: number;
  price: string;
  product: any;
}

interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface PaymentResult {
  id: string;
  status: string;
  update_time: string;
  email_address: string;
}

interface IOrder {
  user: any;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult: PaymentResult;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: Date;
  isDelivered: boolean;
}

const ordersApiSlice = createApi({
  reducerPath: 'ordersApiSlice',

  baseQuery,
  tagTypes: ['Products', 'Order', 'User'],
  endpoints: (builder) => ({
    getOrders: builder.query<IOrder[], void>({
      query: () => ({
        url: ORDERS_URL,
        // You can add query parameters here if needed, like:
        // params: { keyword, pageNumber },
      }),
      transformResponse: (response: IOrder[]) => response,
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
  }),
});

// Export the generated hooks and slice
export const {  } = ordersApiSlice;
export { ordersApiSlice };
