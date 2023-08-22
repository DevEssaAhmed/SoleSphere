import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../store/apis/productsApiSlice';
import Loader from '../Loader/Loader';
import Paginate from '../Paginate/Paginate';

const ProductList = ({ sliceCount }) => {
  const { pageNumber } = useParams();
  // Receive sliceCount as a prop
  const { data, isLoading, isError } = useGetProductsQuery({ pageNumber });

  if (isLoading) {
    return (
      <div className='w-screen flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error: Network Error{isError}</div>;
  }
  return (
    <>
      <div className='flex flex-wrap justify-center items-center'>
        {data.products.slice(0, sliceCount).map((item) => {
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
      <div className='flex items-center justify-center'>

      <Paginate pages={data.pages} page={data.page} />
      </div>
    </>
  );
};

export default ProductList;
