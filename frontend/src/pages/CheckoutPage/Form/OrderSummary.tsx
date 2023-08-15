import { useAppSelector } from '../../../store/hooks';
import OrderSummaryItem from './OrderSummaryItem';

const OrderSummary = ({ currentStep }) => {
  const { cartItems, itemPrice, totalPrice, shippingPrice, taxPrice } =
    useAppSelector((state) => state.cart);
  // More products...

  return (
    <div className='mt-10 lg:mt-0'>
      <h2 className='text-lg font-medium text-gray-900'>Order summary</h2>

      <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
        <h3 className='sr-only'>Items in your cart</h3>
        <ul className='divide-y divide-gray-200 px-4'>
          {cartItems.map((item) => (
            <OrderSummaryItem key={item._id} cartItems={item} />
          ))}
        </ul>
        <dl className='space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6'>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Subtotal</dt>
            <dd className='text-sm font-medium text-gray-900'>${itemPrice}</dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Shipping</dt>
            <dd className='text-sm font-medium text-gray-900'>
              ${shippingPrice}
            </dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Taxes</dt>
            <dd className='text-sm font-medium text-gray-900'>${taxPrice}</dd>
          </div>
          <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
            <dt className='text-base font-medium'>Total</dt>
            <dd className='text-base font-medium text-gray-900'>
              {totalPrice}
            </dd>
          </div>
        </dl>

        <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
          {currentStep === 3 && (
            <button
              type='submit'
              className='w-full rounded-md border border-transparent bg-primary py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
            >
              Confirm order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
