import { Link, useParams } from 'react-router-dom';
import { useGetOrderDetailsQuery } from '../../store/apis/ordersApiSlice';
import Loader from '../../components/Loader/Loader';
import OrderSummaryItem from '../CheckoutPage/Form/OrderSummaryItem';

import { useAppDispatch } from '../../store/hooks';
import { clearCartItems } from '../../store/slices/cartSlice';
import { useEffect } from 'react';

const OrderPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCartItems());
  }, []);

  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);
  if (isLoading) {
    return (
      <div className='w-screen flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: Network Error {`${error}`}</div>;
  }
  console.log(order);
  return (
    <div className='bg-gray-50 py-16 md:py-24'>
      <h1 className='text-center text-black font-bold text-3xl'>
        Order# {order._id}
      </h1>
      <div className='mx-auto  px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
        <div className='col-span-1'>
          <div className=''>
            <h2 className='text-2xl border-b-2 pb-2'>Shipping</h2>
            <h3 className='pt-2'>Name: {order.user.name}</h3>
            <h3 className='pt-2'>Email: {order.user.email}</h3>

            <h3 className='pt-2'>
              Address: {order.shippingAddress.address},{' '}
              {order.shippingAddress.city}
            </h3>

            <div className='w-full mt-8'>
              {order.isDeivered ? (
                <div className='bg-green-100 text-green-600 py-4 px-8 rounded-md'>
                  Delivered
                </div>
              ) : (
                <div className='bg-red-100 text-red-600 py-4 px-8 rounded-md'>
                  Not Delivered
                </div>
              )}
            </div>
          </div>

          <div className='mt-8'>
            <h2 className='text-2xl border-b-2 pb-2'>Payment Method</h2>
            <h3 className='pt-2'>Method: {order.paymentMethod}</h3>
            <div className='w-full mt-8'>
              {order.isPaid ? (
                <div className='bg-green-100 text-green-600 py-4 px-8 rounded-md'>
                  Paid
                </div>
              ) : (
                <div className='bg-red-100 text-red-600 py-4 px-8 rounded-md'>
                  Not Paid
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='mt-10 lg:mt-0'>
            <h2 className='text-2xl font-medium text-gray-900'>Order summary</h2>

            <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
              <h3 className='sr-only'>Items in your cart</h3>
              <ul className='divide-y divide-gray-200 px-4'>
                {order.orderItems.map((item) => (
                  <OrderSummaryItem key={item._id} cartItems={item} />
                ))}
              </ul>
              <dl className='space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6'>
                <div className='flex items-center justify-between'>
                  <dt className='text-sm'>Subtotal</dt>
                  <dd className='text-sm font-medium text-gray-900'>
                    ${order.itemPrice}
                  </dd>
                </div>
                <div className='flex items-center justify-between'>
                  <dt className='text-sm'>Shipping</dt>
                  <dd className='text-sm font-medium text-gray-900'>
                    ${order.shippingPrice}
                  </dd>
                </div>
                <div className='flex items-center justify-between'>
                  <dt className='text-sm'>Taxes</dt>
                  <dd className='text-sm font-medium text-gray-900'>
                    ${order.taxPrice}
                  </dd>
                </div>
                <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
                  <dt className='text-base font-medium'>Total</dt>
                  <dd className='text-base font-medium text-gray-900'>
                    ${order.totalPrice}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
