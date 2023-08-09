// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BsArrowLeftCircle } from 'react-icons/bs';

// const ProductDetailsPage = () => {
//   return (
//     <div className=''>
//       {/* Card Container */}
//       <div className='flex items-center justify-center flex-col p-6 m-3 bg-white rounded-2xl md:flex-row md:m-0 md:p-16 md:space-x-6 md:gap-12'>
//         {/* Image Div */}
//         <div>
//           <img
//             src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
//             className='hover:scale-105 mx-auto duration-200 w-[45rem] rounded-lg'
//           />
//         </div>
//         {/* Content */}
//         <div className='flex flex-col  space-y-6'>
//           {/* Label and Description Container */}
//           <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
//             <div>
//               <div className='inline-block px-3 py-1 text-sm text-white bg-black rounded-full'>
//                 Free Shipping
//               </div>
//             </div>
//             {/* Title */}
//             <div className='max-w-sm text-2xl font-medium'>
//               Razer Kraken Kitty Edt Gaming Headset Quartz
//             </div>
//             {/*Price Container  */}
//             <div className='flex flex-col mb-4 space y-3 text-center md:text-left'>
//               <p className='line-through'>$799</p>
//               <p className='text-5xl font-bold'>$599</p>
//               <p className='text-sm font-light text-gray-400'>
//                 This offer is valid until April 3rd or as long as stock lasts
//               </p>
//             </div>
//             {/* Button Group */}

//             {/* Stock */}
//             <div className='flex items-center space-x-3 group'>
//               <div className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping' />
//               <div className='text-sm'>50+ pcs. in stock</div>
//             </div>
//             {/* Bottom Buttons Container */}
//             <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
//               <button className='bg-primary w-full flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150'>
//                 <img className='w-8' />
//                 <span>Add to cart</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;
import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BsArrowLeftCircle } from 'react-icons/bs';
import Breadcrumb from '../../components/BreadCrumbs/BreadCrumbs';

const ProductDetailsPage = () => {
  // State for selected size and color
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('Red'); // Set a default color

  // Sample data for sizing and colors options
  const sizes = ['US 7', 'US 8', 'US 9', 'US 10'];
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];

  // Product description
  const description = 'Short product description goes here.';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' }, // Assuming you have a Products page
    { label: 'Product Details' },
  ];
  // Sample stock count
  let stockCount: number = 50;

  return (
    <div className=''>
      {/* Breadcrumbs */}
      <div className='py-4 mt-8 px-80'>
        <Breadcrumb crumbs={breadcrumbs} />
      </div>
      {/* Go Back Button
      <Link
        to='/'
        className='hidden md:block absolute top-15 left-30 text-3xl text-primary'
      >
        <BsArrowLeftCircle />
      </Link> */}

      {/* Card Container */}
      <div className='flex items-center gap-y-4 justify-center flex-col p-6 m-3 bg-white rounded-2xl md:flex-row md:m-0 md:p-16 md:space-x-6 md:gap-12'>
        {/* Image Div */}
        <div>
          <img
            src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            className='hover:scale-105 mx-auto duration-200 w-[45rem] rounded-lg'
          />
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
            <div className='max-w-sm text-2xl font-medium'>
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            {/* Description */}
            <div className='text-sm text-gray-600'>{description}</div>
            {/* Price Container */}
            <div className='flex flex-col mb-4 space y-3 text-center md:text-left'>
              <p className='line-through'>$799</p>
              <p className='text-5xl font-bold'>$599</p>
              <p className='text-sm font-light text-gray-400'>
                This offer is valid until April 3rd or as long as stock lasts
              </p>
            </div>
            {/* Sizing Options */}
            <div>
              <p className='text-lg font-medium'>Select Size:</p>
              <div className='flex space-x-4'>
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full ${
                      selectedSize === size
                        ? 'bg-primary text-white'
                        : 'bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Colors Options */}
            <div>
              <p className='text-lg font-medium'>Select Color:</p>
              <div className='flex space-x-4'>
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full ${
                      selectedColor === color
                        ? `custom-bg-${color.toLowerCase()}-500 border-primary border-4`
                        : `custom-bg-${color.toLowerCase()}-500`
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            {/* Stock */}
            <div className='flex items-center space-x-3 group'>
              <div
                className={`w-3 h-3 rounded-full ${
                  stockCount > 0
                    ? 'bg-green-400 group-hover:animate-ping'
                    : 'bg-red-400'
                }`}
              />
              <div
                className={`text-sm ${
                  stockCount > 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {stockCount > 0
                  ? `${stockCount} pcs. in stock`
                  : 'Out of stock'}
              </div>
            </div>
            {/* Bottom Buttons Container */}
            <div className='flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row'>
              <button
                className={`bg-primary w-full flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-150 ${
                  stockCount === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={stockCount === 0}
              >
                <img className='w-8' />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
