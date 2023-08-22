import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

import { useGetTopProductsQuery } from '../../store/apis/productsApiSlice';
import Header from './Header';
import BannerImg from '../../assets/banner.png';
import Carousel from './Carousel';

const HomePage = () => {
  const { data, isLoading } = useGetTopProductsQuery({});

  return (
    <div>
      <Header />

      <div className='mb-12'>
        <h1 className='text-center text-5xl font-bold mt-16 lg:mt-32 p-4'>
          Our Top Products
        </h1>

        <div className='flex flex-wrap justify-center items-center'>
          {!isLoading &&
            data.slice(0, 8).map((item) => {
              return (
                <div className='m-16' key={item._id}>
                  <Link to={`/products/${item._id}`}>
                    <ProductCard item={item} />
                  </Link>
                </div>
              );
            })}
          <Link to='/products'>
            <button className='hover:text-primary border border-primary rounded-md px-4 py-2'>
              Show All Products &#10145;
            </button>
          </Link>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default HomePage;
