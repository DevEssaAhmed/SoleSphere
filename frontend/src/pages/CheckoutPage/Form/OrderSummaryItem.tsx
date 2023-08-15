// import { CartContext } from '../../contexts/cart-context';
const OrderSummaryItem = ({ cartItems }) => {
  const { name, price, qty, image } = cartItems;

  return (
    <div>
      <li className='flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0'>
        <div className='shrink-0'>
          <img
            className='h-24 w-24 max-w-full rounded-lg object-cover'
            src={image}
          />
        </div>
        <div className='relative flex flex-1 flex-col justify-between'>
          <div className='sm:col-gap-5 sm:grid sm:grid-cols-2'>
            <div className='pr-8 sm:pr-5'>
              <p className='text-base font-semibold text-gray-900'>{name}</p>
            </div>
            <div className='mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end'>
              <p className='shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right'>
                {qty}×${price}
              </p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default OrderSummaryItem;
