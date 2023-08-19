import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useDeliverOrderMutation,
} from '../../store/apis/ordersApiSlice';
import { useGetPayPalClientIdQuery } from '../../store/apis/apiSlice';

// @ts-nocheck
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearCartItems } from '../../store/slices/cartSlice';
import {
  PayPalButtons,
  SCRIPT_LOADING_STATE,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { toast } from 'react-toastify';

import Loader from '../../components/Loader/Loader';
import OrderSummaryItem from '../CheckoutPage/Form/OrderSummaryItem';

const OrderPage = () => {
  const dispatch = useAppDispatch();

  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPaypal,
  } = useGetPayPalClientIdQuery({});

  const { userInfo } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearCartItems());
    if (!errorPaypal && !loadingPayPal && paypal.clientId) {
      const loadPayPalScript = async () => {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            clientId: paypal.clientId,
            currency: 'USD',
          },
        });

        // Assuming 'pending' is a valid loading state or status in your context
        paypalDispatch({
          type: 'setLoadingStatus',
          value: 'pending' as SCRIPT_LOADING_STATE,
        });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) loadPayPalScript();
      }
    }
  }, [order, paypal]);

  const onApprove = (_data, actions) => {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success('Payment Successful');
      } catch (err) {
        toast.error(err?.data?.message || err.message);
      }
    });
  };
  // const onApproveTest = async () => {
  //   await payOrder({ orderId, details: { payer: {} } });
  //   refetch();
  //   toast.success('Payment Successful');
  // };
  const deliverHandler = async () => {
    try {
      await deliverOrder({ orderId });
      refetch();
      toast.success('Order Delivered');
    } catch (err) {
      toast.error(err);
    }
  };

  const onError = (err) => {
    toast.error(err.message);
  };
  const createOrder = (_data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: order.totalPrice,
            },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  };

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
              {order.isDelivered ? (
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
                  Paid on {`${new Date()}`}
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
            <h2 className='text-2xl font-medium text-gray-900'>
              Order summary
            </h2>

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
              {!order.isPaid && (
                <div>
                  {loadingPay && <Loader />}
                  {isPending ? (
                    <Loader />
                  ) : (
                    <div className='px-10'>
                      {/* <button
                        onClick={onApproveTest}
                        className='mb-4 bg-black px-4 py-3 text-white w-full rounded-md'
                      >
                        Test Pay Order
                      </button> */}
                      <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                      ></PayPalButtons>
                    </div>
                  )}
                </div>
              )}

              {loadingDeliver && <Loader />}

              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <div className='px-10'>
                    <button
                      onClick={deliverHandler}
                      className='mb-4 bg-black px-4 py-3 text-white w-full rounded-md'
                    >
                      Mark as Deliver
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
