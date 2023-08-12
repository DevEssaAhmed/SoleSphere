// import { products, shopProducts } from '../../data';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../store/apis/productsApiSlice';
import Loader from '../Loader/Loader';

const ProductList = ({ sliceCount }) => {
  // Receive sliceCount as a prop
  const { data, isLoading, isError } = useGetProductsQuery();

  console.log(data);

  if (isLoading) {
    return <div className='w-screen flex items-center justify-center'><Loader/></div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {data.slice(0, sliceCount).map((item) => {
        // Use sliceCount prop here
        return (
          <div className='m-16' key={item._id}>
            <Link to={`/products/${item._id}`}>
              <ProductCard item={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
