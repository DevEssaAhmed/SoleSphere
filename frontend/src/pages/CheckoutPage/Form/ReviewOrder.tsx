const ReviewOrder = ({ cart }) => {
  return (
    <div>
      <h2 className='text-lg font-medium text-gray-900'>
        Review Order Details
      </h2>

      <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'></div>
      <div className='mt-10 border-t border-gray-200 pt-10'>
        <h2 className='text-lg font-medium text-gray-900 '>
          Shipping information
        </h2>
        <h3 className='pt-2'>
          Address: {cart.shippingAddress.address}, {cart.shippingAddress.city}
        </h3>
      </div>
      <div className='mt-10 border-t border-gray-200 pt-10'>
        <h2 className='text-lg font-medium text-gray-900 '>Payment Method</h2>
        <h3 className='pt-2'>Method: {cart.paymentMethod}</h3>
      </div>
    </div>
  );
};

export default ReviewOrder;
