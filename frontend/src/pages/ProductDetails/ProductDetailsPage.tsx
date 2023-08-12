import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProductsDetailsQuery } from '../../store/apis/productsApiSlice';

import Breadcrumb from '../../components/BreadCrumbs/BreadCrumbs';
import Loader from '../../components/Loader/Loader';
import { addToCart } from '../../store/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toast } from 'react-toastify';

const ProductDetailsPage = () => {
  const { id: productId } = useParams();

  const { data, isLoading, isError } = useGetProductsDetailsQuery(productId);

  if (isError) {
    return <h1>Error {isError}</h1>;
  }

  // State for selected size and color
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(''); // Set a default color
  const [qty, setQty] = useState(1);
  // Sample data for sizing and colors options
  // const sizes = ['US 7', 'US 8', 'US 9', 'US 10'];
  // const colors = ['Red', 'Blue', 'Green', 'Yellow'];
  const dispatch = useAppDispatch();

  const qtyForItem = useAppSelector((state) => {
    const matchingCartItem = state.cart.cartItems.find(
      (cartItem) => cartItem._id === productId
    );
    return matchingCartItem ? matchingCartItem.qty : 0;
  });


  const totalCartQuantity = qtyForItem + qty;

  const addToCartHandler = () => {
    const newQty = qty + qtyForItem
    dispatch(
      addToCart({
        ...data,
        qty: newQty,
      })
    );
    toast.success('Item Added to Cart');
  };

  // Product description
  // const description = 'Short product description goes here.';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' }, // Assuming you have a Products page
    // { label: `${data.name}` },
    { label: data ? data.name : 'Loading...' },
  ];
  // Sample stock count
  // let stockCount: number = 50;

  return (
    <div className='mx-auto w-screen'>
      {/* Breadcrumbs */}
      <div className='py-4 mt-8 px-80'>
        <Breadcrumb crumbs={breadcrumbs} />
      </div>

      {isLoading ? (
        <div className='mx-auto  flex items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <div className='flex items-center gap-y-4 justify-center flex-col p-6 m-3 bg-white rounded-2xl md:flex-row md:m-0 md:p-16 md:pt-0 md:space-x-6 md:gap-12'>
          {/* Image Div */}
          <div>
            <img src={data?.image} alt='' />
          </div>
          {/* Content */}
          <div className='flex flex-col  space-y-6'>
            {/* Label and Description Container */}
            <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
              <div>
                <div className='inline-block px-3 py-1 text-sm text-white bg-black rounded-full'>
                  Free Shipping
                </div>
              </div>
              {/* Title */}
              <div className='max-w-sm text-2xl font-medium'>{data?.name}</div>
              {/* Description */}
              <div className='text-sm w-80 text-gray-600'>
                {data.description}
              </div>
              {/* Price Container */}
              <div className='flex flex-col mb-4 space y-3 text-center md:text-left'>
                <p className='line-through'>${data.price + 200}</p>
                <p className='text-5xl font-bold'>${data?.price}</p>
                <p className='text-sm font-light text-gray-400'>
                  This offer is valid until April 3rd or as long as stock lasts
                </p>
              </div>
              {/* Sizing Options */}
              <div>
                <p className='text-lg font-medium'>Select Size:</p>
                <div className='flex gap-x-4 flex-wrap w-96 items-center justify-start gap-y-4'>
                  {data?.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-2 py-1 rounded-full  ${
                        selectedSize === size
                          ? 'bg-primary text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      {`US ${size}`}
                    </button>
                  ))}
                </div>
              </div>
              {/* Colors Options */}
              <div>
                <p className='text-lg font-medium'>Select Color:</p>
                <div className='flex space-x-4'>
                  {data.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full ${
                        selectedColor === color
                          ? `custom-bg-${color.toLowerCase()}-500 border-primary border-4`
                          : `custom-bg-${color.toLowerCase()}-500`
                      }       
                      
                      ${
                        color.toLowerCase() === 'white'
                          ? 'border-black border-4'
                          : ''
                      }
                      
                      `}
                    ></button>
                  ))}
                </div>
              </div>
              {/* Qty Options */}
              {data.countInStock - qtyForItem > 0  && (
                <div>
                  <p className='text-lg font-medium'>Select Quantity:</p>
                  <div className='flex space-x-4 items-center'>
                    {data.countInStock > 0 && (
                      <select
                        className='border rounded p-1 w-20'
                        value={qty}
                        onChange={(e) =>
                          setQty(
                            Math.min(Number(e.target.value), data.countInStock)
                          )
                        }
                      >
                        {Array.from(
                          {
                            length: Math.min(
                              data.countInStock - qtyForItem,
                              10
                            ),
                          },
                          (_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          )
                        )}
                      </select>
                    )}
                    <span className='text-gray-600'>
                      ({data?.countInStock - qtyForItem} pcs. available)
                    </span>
                  </div>
                </div>
              )}
              {/* Stock */}
              <div className='flex items-center space-x-3 group'>
                <div
                  className={`w-3 h-3 rounded-full ${
                    data?.countInStock - qtyForItem > 0
                      ? 'bg-green-400 group-hover:animate-ping'
                      : 'bg-red-400'
                  }`}
                />
                <div
                  className={`text-sm ${
                    data?.countInStock - qtyForItem > 0
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {data?.countInStock - qtyForItem > 0
                    ? `${data?.countInStock - qtyForItem} pcs. in stock`
                    : 'Out of stock'}
                </div>
              </div>
              {/* Bottom Buttons Container */}
              <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
                <button
                  className={`bg-primary text-white w-full flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150 ${
                    data?.countInStock === 0 ||
                    totalCartQuantity > data?.countInStock
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  // disabled={data?.countInStock === 0}
                  disabled={
                    data?.countInStock === 0 ||
                    totalCartQuantity > data?.countInStock
                  }
                  onClick={addToCartHandler}
                >
                  {/* <img className='w-8' />
                  <span>Add to cart</span> */}
                  Add to Cart
                  <i className='ml-2 fa-solid fa-cart-shopping'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
{
  /* Go Back Button
      <Link
        to='/'
        className='hidden md:block absolute top-15 left-30 text-3xl text-primary'
      >
        <BsArrowLeftCircle />
      </Link> */
}

{
  /* Card Container */
}
