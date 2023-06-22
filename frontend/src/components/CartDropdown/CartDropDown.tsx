
// import CartItem from '../CartItem/CartItem';

import { Link } from 'react-router-dom';

const CartDropDown = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div>
      <div className=' absolute  top-18 right-8 z-10 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mt-8  w-96 max-w-md md:mt-12'>
          <div className='rounded-3xl   bg-white shadow-lg '>
            <div
              className='px-4 h-96 cart-scroll overflow-y-auto
 


              py-6 sm:px-8 sm:py-10 '
            >
              {/* <div className="mt-6 text-center"> */}
              {/* {cartItems.length ? (
                cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))
              ) : (
                <span className='text-center'>Your Cart is Empty!</span>
              )} */}
            </div>
            <div className='px-4  py-6 sm:px-8 sm:py-10 '>
              <div className='mt-6 space-y-3  border-b py-8'>
                {/* <div className="flex items-center justify-between">
                  <p className="text-gray-400">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900">
                    $2399.00
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">Shipping</p>
                  <p className="text-lg font-semibold text-gray-900">$8.00</p>
                </div> */}
              </div>
              <div className='mt-6 flex items-center justify-between'>
                <p className='text-sm font-medium text-gray-900'>Total</p>
                <p className='text-2xl font-semibold text-gray-900'>
                  <span className='text-xs font-normal text-gray-400'>USD</span>{' '}
                  {/* {cartTotal} */}
                </p>
              </div>
              <div className='mt-6 text-center'>
                <Link to='/cart'>
                  <button
                    type='button'
                    className='group inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800'
                  >
                    Go to Checkout
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='group-hover:ml-8 ml-4 h-6 w-6 transition-all'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDropDown;
