import React from 'react';
import Rating from '../Rating/Rating';

interface Product {
  image: string;
  name: string;
  price: number;
  rating: number;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  // console.log(item)
  const { image, name, price, rating } = item;

  return (
    <div className='flex flex-col justify-center items-center w-80 border border-[#FBF7FF] gap-y-1 hover:shadow-lg hover:'>
      <div className='w-64 h-60 bg-[#FBF7FF] bg-opacity-75 flex items-center justify-center rounded-md '>
        <img className='max-w-full max-h-full w-3/4 ' src={image} alt='' />
        {/* <div className='absolute inset-0 bg-gray-500 opacity-0 hover:opacity-50 transition-opacity'></div> */}
      </div>
      <h1 className='font-bold w-3/4 text-center'>{name}</h1>

      <Rating value={rating} text={rating} />

      <div className='flex justify-around items-center w-full'>
        <h3 className='text-primary font-semibold'>${price}</h3>
        {/* <button className='p-2 text-sm  bg-primary rounded-lg text-white'>
          Add to Cart <i className='fa-solid fa-cart-shopping'></i>
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
