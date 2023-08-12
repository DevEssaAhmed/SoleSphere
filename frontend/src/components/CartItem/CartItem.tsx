

const CartItem = ({ cartItem }) => {

  const { name, price, qty,image } = cartItem;

  return (
    <div className="flow-root">
      <ul className="-my-8 mb-4">
        <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
          <div className="shrink-0 relative">
            <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
              {qty}
            </span>
            <img
              className="h-24 w-24 max-w-full rounded-lg object-cover"
              src={image}
              
            />
          </div>
          <div className="relative flex flex-1 flex-col justify-between">
            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
              <div className="pr-8 sm:pr-5">
                <p className="text-base font-semibold text-gray-900">{name}</p>
                {/* <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                        36EU - 4US
                      </p> */}
              </div>
              <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                  ${price * qty}
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
              {/* <hr class="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
