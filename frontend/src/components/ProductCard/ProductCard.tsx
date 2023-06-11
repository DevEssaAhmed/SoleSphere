import React from 'react';

interface Product {
  image: string;
  name: string;
  price: number;
  rating: string;
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { image, name, price, rating } = item;

  return (
    <div className='flex flex-col justify-center items-center border border-[#FBF7FF] gap-y-1'>
      <div className='w-64 h-60 bg-[#FBF7FF] bg-opacity-75 flex items-center justify-center rounded-md '>
        <img className='max-w-full max-h-full w-3/4 ' src={image} alt='' />
      </div>
      <h1 className='font-bold'>{name}</h1>
      <h2 className='text-yellow-400'>{rating}</h2>
      <div className='flex justify-around items-center w-full'>
      <h3 className='text-primary font-semibold'>${price}</h3>
    <button className='p-2 text-sm  bg-primary rounded-lg text-white'>Add to Cart <i className='fa-solid fa-cart-shopping'></i></button>
      </div>
    </div>
  );
};

export default ProductCard;
